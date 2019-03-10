import React, { Component } from 'react';
import './App.css';
import Add from './components/Add/Add.jsx';
import Find from './components/Find/Find.jsx';
import Header from './components/Header/Header.jsx';



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <div className = "App-item">
//         <Add />
//         </div>
//         <Find />
//       </div>
//     );
//   }
// }

// export default App;
import './App.css';

import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-intro">
          <Switch>
            <Route exact path="/add" component={Add} />
            <Route path="/find" component={Find} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;