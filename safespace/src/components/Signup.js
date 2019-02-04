import React, {Component} from 'react';
import { connect } from 'react-redux';
import {signup} from '../actions';

class Signup extends Component {

    state = {
        name: '',
        // firstName: '',
        // lastName: '',
        // phone: '',
        username: '',
        password: ''
    }

    input = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    signup = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.signup(this.state);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.signup}>
                    <input
                        onChange={this.input}
                        placeholder='Name'
                        value={this.state.name}
                        name='name'
                        type='text'
                    />
                    {/* <input
                        onChange={this.input}
                        placeholder='Last Name'
                        value={this.state.lastName}
                        name='lastName'
                        type='text'
                    /> */}
                    {/* <input
                        onChange={this.input}
                        placeholder='Telephone Number'
                        value={this.state.phone}
                        name='phone'
                        type='tel'
                    /> */}
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
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.signupReducer.users,
        isLoading: state.signupReducer.isLoading,
        error: state.signupReducer.error
    }
}

export default connect(mapStateToProps, {signup})(Signup);