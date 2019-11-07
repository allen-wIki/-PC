import React,{Component} from 'react';

import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';


export default class App extends Component {
  render() {
    return(
      <div>
        <Header />
        <Main>{this.props.children} </Main>
        <Footer />
      </div>
    )
  }
}