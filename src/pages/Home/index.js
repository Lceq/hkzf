import React from "react"

// 导入Route
import { Route } from "react-router-dom"
// 导入css
import "./index.css"
// // 导入组件
import Index from "../Index"
import News from "../News"
import Profile from "../Profile"
import Houselist from "../Houselist"

// TabBar
import { TabBar } from "antd-mobile"

// 菜单选项数据
const TABBARLIST = [
  { title: "首页", icon: "icon-ind", path: "/home" },
  { title: "找房", icon: "icon-findHouse", path: "/home/houselist" },
  { title: "资讯", icon: "icon-infom", path: "/home/news" },
  { title: "我的", icon: "icon-my", path: "/home/profile" }
]
export default class Home extends React.Component {
  //Tabar 复制初始化
  constructor(props) {
    super(props)
    this.state = {
      // 指定当前选中的 tab 菜单
      selectedTab: this.props.location.pathname,
      hidden: false,
      fullScreen: true
    }
  }

  //Tabar 渲染底部
  renderTabbar = () => {
    return TABBARLIST.map(item => (
      <TabBar.Item
        title={item.title}
        key={item.path}
        icon={<i className={`iconfont ${item.icon}`} />}
        selectedIcon={<i className={`iconfont ${item.icon}`} />}
        selected={this.state.selectedTab === item.path}
        onPress={() => {
          this.props.history.push(item.path)
          this.setState({
            selectedTab: item.path
          })
        }}
        data-seed="logId"
      />
    ))
  }
  render() {
    return (
      <div>
        <Route exact path="/home" component={Index} />
        <Route path="/home/Houselist" component={Houselist} />
        <Route path="/home/news" component={News} />
        <Route path="/home/profile" component={Profile} />
        {/* TabBar */}
        <div className="tabbar">
          <TabBar tintColor="#21b97a" barTintColor="white">
            {this.renderTabbar()}
          </TabBar>
        </div>
      </div>
    )
  }
}
