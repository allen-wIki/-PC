import React, { Component } from 'react';

import style from './dropdown.module.css';

export default class Dropdown extends Component {

  constructor() {
    super();
    this.state = {
      selectSub: 0,
      status: false,
      list: ['全部', '国语', '欧美', '粤语', '港台', '流行', '影视', '其他']
    };
  }
  switchState() {
    this.setState({
      status: !this.state.status
    })
  }
  selectSub(sub) {
    this.setState({
      selectSub: sub,
      status: !this.state.status
    })
  }

  render() {
    return (
      <div className={style.dropdown_wrap}>
        <div style={this.state.status ? { boxShadow: '0px 2px 4px 0px rgba(17, 5, 9, 0.06)' } : null} className={style.content} onClick={this.switchState.bind(this)}>
          <div className={style.select_value}>
            {this.state.list[this.state.selectSub]}
            <i className="iconfont iconjiantouarrow483"></i>
          </div>

          {
            this.state.status ?
              <div className={style.list_wrap}>
                {
                  this.state.list.map((item, index) => {
                    return (
                      <div className={this.state.selectSub === index ? style.select : null} onClick={() => this.selectSub(index)} data-sub={index} key={index}>{item}</div>
                    )
                  })
                }
              </div>
              :
              null
          }
        </div>

      </div>
    )
  }
}