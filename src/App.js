import React, { Component } from 'react';
import './App.css';

import ListContainer from '../src/Containers/ListContainer'

class App extends Component {


  constructor() {
    super();
    this.state = { array: null }
  }


  render() {
    return (
      <ListContainer></ListContainer>
    );
  }




}

export default App;
