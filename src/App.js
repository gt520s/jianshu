import React, { Component } from 'react';
import {Globalstyle} from './style'
import {GlobalStyleIfont} from './statics/fonts/iconfont'
import {Provider} from 'react-redux'
import store from './store'

import Header from './common/header'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Globalstyle />
        <GlobalStyleIfont/>
        <Header />
      </Provider>
    );
  }
}

export default App;
