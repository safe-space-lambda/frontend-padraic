import axios from 'axios';

axios.defaults.withCredentials = true;

export const SEND_SIGNUP = 'SEND_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

const baseUrl = 'https://lambda-safe-space.herokuapp.com';
const authToken = (window.localStorage.getItem('token'))
    ? axios.defaults.headers.common['Authorization'] = window.localStorage.getItem('token')
    : axios.defaults.headers.common['Authorization'] = null
;

export const signup = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(`${baseUrl}/api/register`, x)
        .then(res => {
            dispatch({type: SIGNUP_SUCCESS, payload: res.data})})
        .catch(err => dispatch({type: SIGNUP_FAIL, payload: err}));
}

export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';


export const login = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(`${baseUrl}/api/login`, x)
        .then(res => {
            window.localStorage.setItem('token', res.data.token);
            window.localStorage.setItem('displayName', `Welcome, ${res.data.name}`);
            window.localStorage.setItem('userId', res.data.id);
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
            // window.location.reload()
        })   
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

export const fetchList = id => dispatch => {
    dispatch({type: FETCHING});
    axios.get(`${baseUrl}/api/users/${id}/messages`, {authToken})
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const addMsg = (id, x) => dispatch => {
    dispatch({type: ADDING});
    axios.post(`${baseUrl}/api/users/${id}/messages`, x, {authToken})
        .then(res => dispatch({type: ADDED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const updateMsg = (id, userId, x) => dispatch => {
    dispatch({type: UPDATING});
    axios.put(`${baseUrl}/api/messages/${id}`, x, {authToken})
        .then(res => dispatch({type: UPDATED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}))
        .then(
            axios.get(`${baseUrl}/api/users/${userId}/messages`, {authToken})
                .then(res => dispatch({type: FETCHED, payload: res.data}))
                .catch(err => dispatch({type: FAIL, payload: err})))
}

export const deleteMsg = (id, userId) => dispatch => {
    dispatch({type: DELETING});
    axios.delete(`${baseUrl}/api/messages/${id}`, {authToken})
        .then(res => dispatch({type: DELETED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}))
        .then(
            axios.get(`${baseUrl}/api/users/${userId}/messages`, {authToken})
                .then(res => dispatch({type: FETCHED, payload: res.data}))
                .catch(err => dispatch({type: FAIL, payload: err})))
}