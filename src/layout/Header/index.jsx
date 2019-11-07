import React, { Component } from 'react';

import { NavLink } from "react-router-dom"

import './heade.css'

import logo from '../../assets/img/logo.png';

export default class Header extends Component {

  constructor() {
    super();
    this.state = {
      navList: [
        {
          name: '首页',
          path: '/home'
        },
        {
          name: '乐章',
          path: '/movement'
        },
        {
          name: '音乐说',
          path: '/music'
        },
        {
          name: '乐趣',
          path: '/fun'
        },
        {
          name: '聊聊',
          path: '/chat'
        }, {
          name: '游记',
          path: '/travel'
        }
        , {
          name: '摄像',
          path: '/camera'
        },
        {
          name: '诚品',
          path: '/eslite'
        },
        {
          name: '蓝莓酱',
          path: '/blueberry'
        },
        {
          name: '社区',
          path: '/community'
        }],
      active: 0
    }
  }

  active(e) {
    console.log(this.props.location.pathname)
  }

  render() {
    return (
      <div className="header">
        <div className="wrap">
          <div className="header-logo">
            <img src={logo} alt="logo加载失败" />
          </div>
          <ul className="nan-list">
            {
              this.state.navList.map((item, index) => {

                // 
                return <li key={index} ><NavLink to={item.path} activeStyle={{backgroundColor: '#109d59' }}  >{item.name}</NavLink></li>
              })
            }
          </ul>
          <div className="header-right">
            <div className='search-wrap'>
              <input className="search" type="text" />
              <i className='iconfont iconicon-chaxun'></i>
            </div>
            <div className="header-btn">
              <span className="login">登录</span>
              <span>注册</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}