import React, { Component } from 'react';

import style from './sort.module.css';

export default class Sort extends Component {
  constructor() {
    super();
    this.state = {
      letter: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  }
  render() {
    return (
      <div className={style.sort_wrap}>
        <div className={style.letter_wrap}>
          {
            this.state.letter.map((item, index) => {
              return (
                <div key={index}>{item}</div>
              )
            })
          }
        </div>
      </div>
    );
  }
}