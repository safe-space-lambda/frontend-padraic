import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {ListView} from './views/ListView';
import {LoginView} from './views/LoginView';
import {SignupView} from './views/SignupView';
import Navigation from './components/Navigation';
import Login from './components/Login';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import MessageList from './components/MessageList';
import { connect } from 'react-redux';

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
    
  componentDidMount(){
    this.setState({
      ...this.state,

    })
  }

  logout = () => {
    console.log('pow');
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
        <Navigation logout={this.logout} loggedIn={this.props.loggedIn}/>
        <Route path='/signup/' component={SignupView} />
        <Route exact path='/' render={props =>(
          this.props.loggedIn === true 
          ? <MessageList {...props}/>
          : <Login {...props}/>
        )} />
      </AppBox>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: state.login.loggedIn
  }
}

export default connect(mapStateToProps, {})(App);
