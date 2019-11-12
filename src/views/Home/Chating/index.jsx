import React, { Component } from 'react';

import style from './chating.module.css';
import chatingImg from '@assets/img/home/chating.png';

import ArticleListTile from '../ArticleListTile';

import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';

export default class Chating extends Component {

  constructor() {
    super();

    this.state = {
      chatingData: [
        [
          {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          },
          {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }, {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }, {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }, {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }, {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }
        ],
        [
          {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          },
          {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }, {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }, {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }, {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }, {
            title: '臭氧也算是大气污染物么？',
            text: '魔都公交电视会播报当天空气质量状况评价以及首要污染物。首要污染物基本以PM打头后面跟各种不同的数字,但是某天的报告说首要污染物...'
          }
        ]

      ]
    }
  }

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
      <div className={style.chating_wrap}>
        <ArticleListTile title="聊 聊" img={chatingImg} english_name="CHATING" />
        <div className={style.chating_main_wrap}>
          <div className="chating_swiper_wrap">
            <div className="swiper-wrapper">
              {
                this.state.chatingData.map((items, index) => {
                  return (
                    <div key={index} className="swiper-slide">
                      <div className={style.items_wrap}>
                        {
                          items.map((item, sub) => {
                            return (
                              <div key={sub} className={style.item_wrap}>
                                <div className={style.live}>生活</div>
                                <div className={style.content}>
                                  <div className={style.content_title}>{item.title}</div>
                                  <div className={style.content_text}>{item.text}</div>
                                </div>
                              </div>
                            )
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div className="swiper-pagination" style={{ top: '310px' }} ></div>
          </div>
        </div>
      </div>
    )
  }
}