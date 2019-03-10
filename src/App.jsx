import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

<<<<<<< HEAD
import Add from './components/Add/Add.jsx';
import Find from './components/Find';
import Header from './components/Header/Header.jsx';
=======
import Add from './components/Add';
import Find from './components/Find/Find.jsx';
import SimpleMap from './components/SimpleMap.jsx';
import Header from './components/Header';
>>>>>>> eac7f7608ba4d1a25eb7b6a5eef7f86d5e2e00b2



class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="App">
        <Header />
        <div className = "App-item">
        <Add />
        </div>
        <Find />
=======
        <div className="App">
        <Header/>
            <header className="App-header">
            </header>
            <Find />
>>>>>>> eac7f7608ba4d1a25eb7b6a5eef7f86d5e2e00b2
      </div>
    );
  }
}

export default App;
