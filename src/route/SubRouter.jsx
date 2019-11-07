import React, { Component } from "react"
import { Route, Switch, Redirect } from "react-router-dom"

import Home from '../views/Home';
import Movement from '../views/Movement';
import Music from '../views/Music';
import Fun from '../views/Fun';
import Login from '../views/Login';



export default class SubRouter extends Component {
  render() {
    return (
      <Switch>
        { /* exact:精准匹配路径 */}
        <Route exact path="/" component={Login}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/movement" component={Movement}></Route>
        <Route path="/music" component={Music}></Route>
        <Route path="/fun" component={Fun}></Route>
        <Route path="/login" component={Login}></Route>
        {/* 重定向 */}
        <Redirect from='/*' to='/home'></Redirect>
      </Switch>
    )
  }
}
