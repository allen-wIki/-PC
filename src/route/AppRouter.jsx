import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import App from '../views/App';
import SubRouter from './SubRouter';

export default class AppRouter extends Component {
  render() {
    return (
      <HashRouter>
        <App>
          <Route component={SubRouter} />
        </App>
      </HashRouter>
    )
  }
}
