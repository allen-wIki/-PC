import React, { Component } from 'react';

import style from './header.module.css';

import Dropdown from '../Dropdown';

import Sort from '../Sort';

export default class Header extends Component {
  render() {
    return (
      <div className={style.header_wrap}>
        <div className={style.main_wrap}>
          <Dropdown />
          <Sort />

          <div>发布</div>
        </div>
      </div>
    );
  }
}