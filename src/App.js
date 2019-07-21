import React from "react"

// 导入导航
// Redirect重定向
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

// 导入组件
import Home from "./pages/Home"

import CityList from "./pages/CityList"
const App = () => {
  return (
    <Router>
      <div>
        {/* <Link to="/home">首页</Link> <br /> */}
        {/* <Link to="/cityList">列表页</Link> */}
        {/* Redirect 组件：重定向组件，通过 to 属性来指定要重定向到的路由地址 */}
        {/* 注意：不要忘记添加 exact 属性 */}
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route path="/home" component={Home} />
        <Route path="/cityList" component={CityList} />
      </div>
    </Router>
  )
}

export default App
