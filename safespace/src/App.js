import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {ListView} from './views/ListView';
import {LoginView} from './views/LoginView';
import {SignupView} from './views/SignupView';
import Navigation from './components/Navigation';
import Login from './components/Login';

import './App.css';


class App extends Component {
  
  state = {
    token: null
  }

  componentDidMount(){
    this.setState({
      ...this.state,
      token: window.localStorage.getItem('token')
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route path='/signup/' component={SignupView} />
        <Route path='/login/' render={props =>(
          <Login {...props}/>
        )} />
        <Route exact path='/' render={props =>(
          this.state.token !== null 
          ? <ListView {...props}/>
          : <Login {...props}/>
        )} />
      </div>
    );
  }
}

export default App;
