import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {ListView} from './views/ListView';
import {LoginView} from './views/LoginView';
import {SignupView} from './views/SignupView';
import Navigation from './components/Navigation';
import Login from './components/Login';
import styled from 'styled-components';

// import './App.css';


const AppBox = styled.div`
  background-image: linear-gradient(to top right, #c3e895, #c3e895, #6bd4c8, #57aed3, #4a87d3, #6b88e6);
  color: #666;
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  font-size: 16pt;
  font-weight: 300;
  line-height: 1.65em;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;



class App extends Component {
  
  state = {
    token: null,
    displayName: ''
  }

  componentDidMount(){
    this.setState({
      ...this.state,
      token: window.localStorage.getItem('token'),
      displayName: window.localStorage.getItem('displayName')
    })
  }

  logout = () => {
    this.setState({
      ...this.state,
      token: null,
      displayName: ''
    });
    localStorage.clear();
    window.location.reload();
  }

  render() {
    return (
      <AppBox>
        <Navigation displayName={this.state.displayName} token={this.state.token} logout={this.logout}/>
        <Route path='/signup/' component={SignupView} />
        <Route exact path='/' render={props =>(
          this.state.token !== null 
          ? <ListView {...props}/>
          : <Login {...props}/>
        )} />
      </AppBox>
    );
  }
}

export default App;
