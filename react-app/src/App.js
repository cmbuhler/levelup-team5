import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleComponent from './TitleComponent';
import D3EnergyChart from './D3EnergyChart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <TitleComponent/>
        </header>
        <D3EnergyChart/>
      </div>
    );
  }
}

export default App;
