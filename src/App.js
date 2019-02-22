import React, { Component } from 'react';
import './App.css';
import Heatmap from './components/heatmap/Heatmap';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Heatmap />
      </div>
    );
  }
}

export default App;
