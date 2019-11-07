import React, { Component } from 'react';

import style from './listening.module.css'

import listening from '../../../assets/img/home/listening.png'

import ArticleListTile from '../ArticleListTile';
import Column from './Column';

export default class Listening extends Component {

  constructor(){
    super();
    this.state = {
      listeningList:[
        {
          imgUrl:'',
          type:'',
          author:'国语/周杰伦',
          name:'不能说的秘密',
          content:'总的而言，是一张很不错的原声带。特别是在国内电影普遍没那么重视电影音乐的大趋势下，这部主打音乐的电影在配乐上制作的用心便显得十分难得。作为周董的处女作，这部电影中的'
        }
      ]
    }
  }
  render() {
    return (
      <div className={style.listening_wrap}>
        <div className={style.listening_main}>
          <ArticleListTile title="听 说" img={listening} english_name="LISTENING" />
          <Column type="left" />
          <Column type="right" />
          <Column type="top" />
        </div>
      </div>
    )
  }
}