import axios from 'axios';

axios.defaults.withCredentials = true;

export const SEND_SIGNUP = 'SEND_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

const baseUrl = 'https://lambda-safe-space.herokuapp.com';

export const signup = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(`${baseUrl}/api/register`, x)
        .then(res => dispatch({type: SIGNUP_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: SIGNUP_FAIL, payload: err}));
}

export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const login = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(`${baseUrl}/api/login`, x)
        .then(res => {
            window.localStorage.setItem('token', res.data);
            window.localStorage.setItem('displayName', `Welcome, ${x.username}`);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
            window.location.reload()})           
        .catch(err => dispatch({type: LOGIN_FAIL, payload: err}));
}

export const FAIL = 'FAIL';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED'; 

export const fetchList = () => dispatch => {
    dispatch({type: FETCHING});
    axios.get({baseUrl})
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const addMsg = x => dispatch => {
    dispatch({type: ADDING});
    axios.post({baseUrl}, x)
        .then(res => dispatch({type: ADDED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const updateMsg = (id, x) => dispatch => {
    dispatch({type: UPDATING});
    axios.put({baseUrl}, x)
        .then(res => dispatch({type: UPDATED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const deleteMsg = id => dispatch => {
    dispatch({type: DELETING});
    axios.delete({baseUrl})
        .then(res => dispatch({type: DELETED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}