import React, { Component } from 'react';
import './App.css';
import Heatmap from './components/heatmap/Heatmap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Seattle Gentrified</h1>
        </header>
        <Heatmap />
      </div>
    );
  }
}

export default App;
