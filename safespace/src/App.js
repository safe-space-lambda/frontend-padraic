import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {ListView} from './views/ListView';
import {LoginView} from './views/LoginView';
import {SignupView} from './views/SignupView';
import Navigation from './components/Navigation';

import './App.css';


class App extends Component {
  
  state = {
    loggedIn: false
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path='/signup/' component={SignupView} />
        <Route path='/login/' component={LoginView} />
        <Route exact path='/' component={ListView} />
      </div>
    );
  }
}

export default App;
