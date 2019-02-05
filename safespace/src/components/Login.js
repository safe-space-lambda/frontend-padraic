import React, {Component} from 'react';
import { connect } from 'react-redux';
import {login} from '../actions';

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
            <div>
                <form onSubmit={this.login}>
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
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.loginReducer.users,
        isLoading: state.loginReducer.isLoading,
        error: state.loginReducer.error
    }
}

export default connect(mapStateToProps, {login})(Login);