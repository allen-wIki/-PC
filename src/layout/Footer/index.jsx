import React, { Component } from 'react';

import './footer.css';

export default class Footer extends Component {
  constructor() {
    super();

    this.state = {
      list: ['关于我们', '联系我们', '加入我们', '团队成员', '商务合作']
    }
  }
  render() {
    return (
      <div className='footer'>

        <div className='footer-wrap'>
          <ul className='column-wrap'>
            {
              this.state.list.map((item, index) => {
                return <li key={index}>{item}</li>
              })
            }
          </ul>
          <div className="copyright-wrap">
            <div>蓝莓派版权所有</div>
            <div>京ICP备12346335号</div>
          </div>
        </div>
      </div>
    )
  }
}