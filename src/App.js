import React, { Component } from 'react';
import ChangeSelectedProduct from './containers/ChangeSelectedProduct';
import DisplayBoxConnect from './containers/DisplayBoxConnect';
// import SelectionBox from './components/SelectionBox';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <DisplayBoxConnect />
        <ChangeSelectedProduct />
      </div>
    );
  }
}

export default App;
