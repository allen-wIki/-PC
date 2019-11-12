import React, { Component } from 'react';

import style from './travelnote.module.css';
import travelnote from '@assets/img/home/travelnote-img.png';

import travelnoteImg from '@assets/img/home/travelnote.png';

import ArticleListTile from '../ArticleListTile';

import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';

export default class Travelnote extends Component {

  constructor() {
    super();

    this.state = {
      travelnoteData: [
        [
          {
            imgUrl: travelnote,
            author: 'Allen',
            title: '跨越赤道的蜜月行-醉美毛里求斯',
            subheading: '花の時光旅行 【時光旅行】年轻就是用来折腾的，有力气去想,去做,而是为了稳定丢掉青春，为了平淡丢掉梦想。我想要的... '
          }, {
            imgUrl: travelnote,
            author: 'Allen',
            title: '跨越赤道的蜜月行-醉美毛里求斯',
            subheading: '花の時光旅行 【時光旅行】年轻就是用来折腾的，有力气去想,去做,而是为了稳定丢掉青春，为了平淡丢掉梦想。我想要的... '
          }, {
            imgUrl: travelnote,
            author: 'Allen',
            title: '跨越赤道的蜜月行-醉美毛里求斯',
            subheading: '花の時光旅行 【時光旅行】年轻就是用来折腾的，有力气去想,去做,而是为了稳定丢掉青春，为了平淡丢掉梦想。我想要的... '
          }, {
            imgUrl: travelnote,
            author: 'Allen',
            title: '跨越赤道的蜜月行-醉美毛里求斯',
            subheading: '花の時光旅行 【時光旅行】年轻就是用来折腾的，有力气去想,去做,而是为了稳定丢掉青春，为了平淡丢掉梦想。我想要的... '
          }
        ],
        [
          {
            imgUrl: travelnote,
            author: 'Allen',
            title: '跨越赤道的蜜月行-醉美毛里求斯',
            subheading: '花の時光旅行 【時光旅行】年轻就是用来折腾的，有力气去想,去做,而是为了稳定丢掉青春，为了平淡丢掉梦想。我想要的... '
          }, {
            imgUrl: travelnote,
            author: 'Allen',
            title: '跨越赤道的蜜月行-醉美毛里求斯',
            subheading: '花の時光旅行 【時光旅行】年轻就是用来折腾的，有力气去想,去做,而是为了稳定丢掉青春，为了平淡丢掉梦想。我想要的... '
          }, {
            imgUrl: travelnote,
            author: 'Allen',
            title: '跨越赤道的蜜月行-醉美毛里求斯',
            subheading: '花の時光旅行 【時光旅行】年轻就是用来折腾的，有力气去想,去做,而是为了稳定丢掉青春，为了平淡丢掉梦想。我想要的... '
          }, {
            imgUrl: travelnote,
            author: 'Allen',
            title: '跨越赤道的蜜月行-醉美毛里求斯',
            subheading: '花の時光旅行 【時光旅行】年轻就是用来折腾的，有力气去想,去做,而是为了稳定丢掉青春，为了平淡丢掉梦想。我想要的... '
          }
        ]
      ]
    }
  }
  // 组件挂载完毕执行
  componentDidMount() {
    new Swiper('.travelnote_swiper_wrap', {
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
        <div className="travelnote_swiper_wrap">
          <div className="swiper-wrapper">
            {
              this.state.travelnoteData.map((items, index) => {
                return (
                  <div key={index} className="swiper-slide">
                    <div className={style.items_wrap}>
                      {
                        items.map((item, sub) => {
                          return (
                            <div key={sub} className={style.item_wrap}>
                              <div className={style.img}>
                                <img src={item.imgUrl} alt="加载失败" />
                                <div className={style.subheading}>{item.subheading}</div>
                              </div>
                              <div className={style.title}>{item.title}</div>
                              <div className={style.author}>{item.author}</div>
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
          <div className="swiper-pagination" style={{ top: '510px' }}></div>
        </div>
      </div>
    );
  }
}