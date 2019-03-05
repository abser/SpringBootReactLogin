import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/login" component={Login}/>
        <Route path="/" component={Dashboard}/>
      </div>
    );
  }
}

export default App;
