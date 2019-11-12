import React, { Component } from 'react';

import style from './photography.module.css';

export default class Photography extends Component {
  constructor() {
    super();
    this.state = {
      photographyData: [
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_07.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_01.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_07.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_01.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_03.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_02.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_03.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_06.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_04.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_05.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_04.png',
        'https://www.allen.wiki/images/lmpimg/pc/photography/photography_05.png'
      ]
    }
  }

  render() {
    return (
      <div className={style.photography_wrap}>
        <div className={style.main_wrap}>
          <div className={style.content_wrap}>
            {
              this.state.photographyData.map((item, index) => {
                return(
                  <img className={style.content_img} key={index} src={item} alt="加载失败"/>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}