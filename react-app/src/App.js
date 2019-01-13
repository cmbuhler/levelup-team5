import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleComponent from './TitleComponent';
import EnergyChart from './EnergyChart';
import Search from './Search';
import MovieCard from './containers/MovieCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className = "text">Song Intensities</p>
        <MovieCard/>
        <MovieCard/>
      </div>
    );
  }
}

export default App;
