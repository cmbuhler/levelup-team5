import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleComponent from './TitleComponent';
import EnergyChart from './EnergyChart';
import Search from './Search';
import MovieCard from './containers/MovieCard';
import 'bootstrap-css-only';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className = "text">Song Intensities</p>
        <div className="container">
          <div className="row">
          <MovieCard/>
          <MovieCard/>
          </div>
        </div>
        <br/>
        <br/>
      </div>
    );
  }
}

export default App;
