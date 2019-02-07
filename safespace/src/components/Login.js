import React, {Component} from 'react';
import { connect } from 'react-redux';
import {login} from '../actions';
import styled from 'styled-components';

const LoginBox = styled.div`
    form {display: flex;
    flex-direction: column;
    padding: 5rem;
    align-items: center;
    justify-content: space-evenly;
    input, button {
        margin-top: 3rem;
        width: 100%;
        padding: .5rem;
        border-radius: 8px;
    }
    button {
        background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);
        border: 1px solid white;
        
        color: white;
    }
    }
`;

class Login extends Component {
    
    state = {
        username: '',
        password: ''
    }

    input = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    login = e => {
        e.preventDefault();
        this.props.login(this.state);
        this.props.history.push('/');
    }
    render(){
        return(
            <LoginBox>
                <form onSubmit={this.login}>
                    <h3>Enter Username and Password</h3>
                    <input
                        onChange={this.input}
                        placeholder='Username'
                        value={this.state.username}
                        name='username'
                        type='text'
                    />
                    <input
                        onChange={this.input}
                        placeholder='Password'
                        value={this.state.password}
                        name='password'
                        type='password'
                    />
                    <button type='submit'>Log In</button>
                </form>
            </LoginBox>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.login.users,
        isLoading: state.login.isLoading,
        error: state.login.error
    }
}

export default connect(mapStateToProps, {login})(Login);