import React, { Component } from 'react';
import Layout from './components/Layouts/layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'

import Checkout from './containers/checkout/checkout'

class App extends Component {

  render(){
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </div>
    );
  }
  
}

export default App;
