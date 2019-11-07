import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../views/App';
import SubRouter from './SubRouter';

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Route component={SubRouter} />
        </App>
      </BrowserRouter>
    )
  }
}
