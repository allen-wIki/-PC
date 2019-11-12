import React, { Component } from 'react';

import style from './travelnote.module.css';

import travelnoteImg from '@assets/img/home/travelnote.png';

import ArticleListTile from '../ArticleListTile';

import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';

export default class Travelnote extends Component {
  // 组件挂载完毕执行
  componentDidMount() {
    new Swiper('.chating_swiper_wrap', {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
  render() {
    return (
      <div className={style.travelnote_wrap}>
        <ArticleListTile title="游 记" img={travelnoteImg} english_name="TRAVELNOTE" />
      </div>
    );
  }
}