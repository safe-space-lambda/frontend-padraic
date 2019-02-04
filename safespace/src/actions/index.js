import axios from 'axios';

export const SEND_SIGNUP = 'SEND_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const signup = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(``, x)
        .then(res => dispatch({type: SIGNUP_SUCCESS, payload: res.data.results}))
        .catch(err => dispatch({type: SIGNUP_FAIL, payload: err}));
}

export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(``, x)
        .then(res => dispatch({type: LOGIN_SUCCESS, payload: res.data.results}))
        .catch(err => dispatch({type: LOGIN_FAIL, payload: err}));
}