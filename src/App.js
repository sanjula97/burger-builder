import React, { Component } from 'react';
import Layout from './components/Layouts/layout'
import MainRouts from './components/Routs/MainRouts'


class App extends Component {

  render(){
    return (
      <div>
        <Layout>   
          <MainRouts />
        </Layout>
      </div>
    );
  }
  
}

export default App;
