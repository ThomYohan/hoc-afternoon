import React, { Component } from 'react';
import CurrencyHOC from './Components/CurrencyConverter'
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <h2>Higher Order Component</h2>
        <CurrencyHOC />
      </>
    );
  }
}

export default App;
