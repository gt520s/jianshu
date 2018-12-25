import React, { Component, Fragment } from 'react';
import {Globalstyle} from './style'
import {GlobalStyleIfont} from './statics/fonts/iconfont'

import Header from './common/header'
class App extends Component {
  render() {
    return (
      <Fragment>
        <Globalstyle />
        <GlobalStyleIfont/>
        <Header />
      </Fragment>
    );
  }
}

export default App;
