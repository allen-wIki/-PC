import React, { Component } from 'react';
import './main.css'
export default class Main extends Component {

  render() {
    return (
      <div className="main-wrap">
        {this.props.children}
      </div>
    )
  }

}