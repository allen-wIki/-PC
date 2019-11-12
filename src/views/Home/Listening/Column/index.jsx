import React from 'react';

import style from './column.module.css';

import img from '@assets/img/home/listening/listening_03.png';

export default function Column(props) {
  const isLoggedIn = props.type;
  return (
    <div className={style.column_wrap}>
      <div style={
        isLoggedIn === 'left' ?
          { display: 'flex' } :
          isLoggedIn === 'right' ?
            { display: 'flex', flexDirection: 'row-reverse' } :
            {}
      }
      >
        <div className={style.column_img}>
          <img src={img} alt="加载失败" />
          <div className={style.column_triangle} style={
            isLoggedIn === 'left' ?
              { top: ' 53px', right: '-10px' } :
              isLoggedIn === 'right' ?
                { top: ' 53px', left: '-10px' } :
                { bottom: '-17px', left: '50%',transform: 'rotate(45deg) translateX(-50%)' }
          }
          ></div>
        </div>
        <div className={style.content_wrap}>
          <div className={style.content_author}>国语/周杰伦</div>
          <div className={style.content_name}>不能说的秘密</div>
          <div className={style.content_main}>总的而言，是一张很不错的原声带。特别是在国内电影普遍没那么重视电影音乐的大趋势下，这部主打音乐的电影在配乐上制作的用心便显得十分难得。作为周董的处女作，这部电影中的...</div>
        </div>
      </div>
    </div>
  )

}