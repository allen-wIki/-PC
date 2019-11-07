import React from 'react'
import style from './index.module.css';

export default function ArticleListTile(props){
  return (
    <div className={style.title_wrap}>
      <div className={style.title}>{props.title}</div>
      <div className={style.title_img}>
        <img src={props.img} alt="加载失败" />
      </div>
      <div className={style.english_name}>{props.english_name}</div>
    </div>
  )
}

