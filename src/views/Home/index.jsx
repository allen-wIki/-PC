import React, { Component } from 'react';

import Banner from './Banner';
import Movement from './Movement';
import Listening from './Listening';
import Interesting from './Interesting';


export default class Home extends Component {
  render() {
    return (
      <div className='home-wrap'>
        <Banner />
        <Movement />
        <Listening />
        <Interesting />
      </div>
    )
  }
}