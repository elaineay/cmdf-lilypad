import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Add from './components/Add/Add.jsx';
import Find from './components/Find';
import Header from './components/Header/Header.jsx';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className = "App-item">
        <Add />
        </div>
        <Find />
      </div>
    );
  }
}

export default App;
