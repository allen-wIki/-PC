import React, { Component } from 'react';

import style from './header.module.css';

import Dropdown from '../Dropdown';

export default class Header extends Component {
  render() {
    return (
      <div className={style.header_wrap}>
        <div className={style.main_wrap}>
          <div>
            <Dropdown />
          </div>
          <div>中间</div>
          <div>发布</div>
        </div>
      </div>
    );
  }
}