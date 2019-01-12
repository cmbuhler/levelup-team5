import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleComponent from './TitleComponent';
import EnergyChart from './EnergyChart';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <TitleComponent/>
        </header>
        <EnergyChart/>
      </div>
    );
  }
}

export default App;
