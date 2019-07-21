import React from "react"

// 导入axios
import axios from "axios"
// 轮播图
import { Carousel } from "antd-mobile"
// scss
import "./index.scss"
export default class extends React.Component {
  // 轮播图
  state = {
    swipers: [],
    imgHeight: 212,
    // 表示轮播图是否加载中
    isSwipers: true
  }
  async getSwipers() {
    let res = await axios.get("http://localhost:8080/home/swiper")
    // console.log(res)
    this.setState({
      swipers: res.data.body,
      isSwipers: false
    })
  }
  // getSwipers()  获取轮播图
  componentDidMount() {
    this.getSwipers()
  }
  // 渲染轮播图
  renderSwipers() {
    return this.state.swipers.map(item => (
      <a
        key={item.id}
        href="http://www.itcast.com"
        style={{
          display: "inline-block",
          width: "100%",
          height: this.state.imgHeight
        }}
      >
        <img
          src={`http://localhost:8080${item.imgSrc}`}
          alt=""
          style={{ width: "100%", verticalAlign: "top" }}
          onLoad={() => {
            // fire window resize event to change height
            window.dispatchEvent(new Event("resize"))
            this.setState({ imgHeight: "auto" })
          }}
        />
      </a>
    ))
  }
  render() {
    return (
      <div>
        {/* 轮播图 */}
        {!this.state.isSwipers && (
          <Carousel autoplay={true} infinite autoplayInterval={3000}>
            {this.renderSwipers()}
          </Carousel>
        )}
      </div>
    )
  }
}
