import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TitleComponent from './TitleComponent';
import HeaderComponent from './HeaderComponent';
import EnergyChart from './EnergyChart';
import Search from './Search';
import MovieCard from './containers/MovieCard';
import 'bootstrap-css-only';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <p className = "text">Song Intensities</p> */}
        <div className="container"> <HeaderComponent/></div>
        <div className="container">
          <div className="row">
          <MovieCard/>
          <MovieCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
