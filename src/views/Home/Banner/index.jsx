import React, { Component } from 'react';

import banner from './banner.module.css';
import bannerImg from '@assets/img/home/banner.png';

import Swiper from 'swiper/js/swiper.min.js';
import 'swiper/css/swiper.min.css';

export default class Banner extends Component {

  constructor() {
    super();

    this.state = {
      bannerList: [
        {
          imgUrl: bannerImg,
          title: '我在爱尔兰，看着世界的阳光',
          content: '爱尔兰（爱尔兰语：Poblacht na hÉireann；英语：Republic of Ireland）， 是一个西欧的议会共和制国家，西临大西洋，东靠爱尔兰海，与英国隔海相望，是北美通向欧洲的通道爱尔兰自然环境保持得相当好，素有“翡翠岛国”之称，全国绿树成荫，河流纵横。草地遍布，所以又有“绿岛”和“绿宝石”之称。'
        },
        {
          imgUrl: bannerImg,
          title: '我在爱尔兰，看着世界的阳光',
          content: '爱尔兰（爱尔兰语：Poblacht na hÉireann；英语：Republic of Ireland）， 是一个西欧的议会共和制国家，西临大西洋，东靠爱尔兰海，与英国隔海相望，是北美通向欧洲的通道爱尔兰自然环境保持得相当好，素有“翡翠岛国”之称，全国绿树成荫，河流纵横。草地遍布，所以又有“绿岛”和“绿宝石”之称。'
        },
        {
          imgUrl: bannerImg,
          title: '我在爱尔兰，看着世界的阳光',
          content: '爱尔兰（爱尔兰语：Poblacht na hÉireann；英语：Republic of Ireland）， 是一个西欧的议会共和制国家，西临大西洋，东靠爱尔兰海，与英国隔海相望，是北美通向欧洲的通道爱尔兰自然环境保持得相当好，素有“翡翠岛国”之称，全国绿树成荫，河流纵横。草地遍布，所以又有“绿岛”和“绿宝石”之称。'
        }
      ]
    }
  }

  // 组件挂载完毕执行
  componentDidMount() {
    new Swiper('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }

  render() {
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            this.state.bannerList.map((item, index) => {
              return (
                <div key={index} className="swiper-slide" style={{ position: 'relative' }} >
                  <img className={banner.swiper_slide_img} src={item.imgUrl} alt="加载失败" />
                  <div className={banner.article_wrap}>
                    <div className={banner.article}>
                      <h1 className={banner.article_title}>{item.title}</h1>
                      <div className={banner.article_content}>{item.content}</div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="swiper-pagination"></div>
      </div>
    )
  }
}
