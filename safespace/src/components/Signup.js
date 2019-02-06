import React, {Component} from 'react';
import { connect } from 'react-redux';
import {signup} from '../actions';
import styled from 'styled-components';


const SignupBox = styled.div`
    form {display: flex;
    flex-direction: column;
    padding: 5rem;
    align-items: center;
    justify-content: space-evenly;
    input, button {
        margin-top: .5rem;
        width: 100%;
        padding: .5rem;
        border-radius: 8px;
    }
    button {
        background-image: linear-gradient(to bottom right, #4fa49a, #4361c2);
        border: 1px solid white;
        
        color: white;
    }
    p {
        margin-top: 2rem;
    }
    }
`;

class Signup extends Component {

    state = {
        name: '',
        // firstName: '',
        // lastName: '',
        phoneNumber: '1',
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
            <SignupBox>
                <form onSubmit={this.signup}>
                    <h3>Sign Up</h3>
                    <p>your name</p>
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
                    <p>username</p>
                    <input
                        onChange={this.input}
                        placeholder='Username'
                        value={this.state.username}
                        name='username'
                        type='text'
                    />
                    <p>password</p>
                    <input
                        onChange={this.input}
                        placeholder='Password'
                        value={this.state.password}
                        name='password'
                        type='password'
                    />
                    <p>telephone number</p>
                    <input
                        onChange={this.input}
                        placeholder='Telephone Number'
                        value={this.state.phoneNumber}
                        name='phoneNumber'
                        type='text'
                        minLength='11'
                        maxLength='11'
                    />
                    <button type='submit'>Sign Up</button>
                </form>
            </SignupBox>
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