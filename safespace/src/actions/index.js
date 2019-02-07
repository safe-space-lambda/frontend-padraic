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
const auth = axios.defaults.headers.common['Authorization'];

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
            dispatch({type: LOGIN_SUCCESS, payload: res.data});
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

export const fetchList = (userId, token) => dispatch => {
    dispatch({type: FETCHING});
    let headers = {Authorization: token,};
    axios.get(`${baseUrl}/api/users/${userId}/messages`, {headers: headers})
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const addMsg = (userId, x, token) => dispatch => {
    dispatch({type: ADDING});
    let headers = {Authorization: token,};
    axios.post(`${baseUrl}/api/users/${userId}/messages`, x, {headers: headers})
        .then(res => dispatch({type: ADDED, payload: res.data}))
        .then(() => fetchList(userId, token)(dispatch))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const updateMsg = (postId, userId, x, token) => dispatch => {
    dispatch({type: UPDATING});
    let headers = {Authorization: token,};
    axios.put(`${baseUrl}/api/messages/${postId}`, x, {headers: headers})
        .then(res => dispatch({type: UPDATED, payload: res.data}))
        .then(() => fetchList(userId, token)(dispatch))
        .catch(err => dispatch({type: FAIL, payload: err}))
}

export const deleteMsg = (id, userId, token) => dispatch => {
    dispatch({type: DELETING});
    let headers = {Authorization: token,};
    axios.delete(`${baseUrl}/api/messages/${id}`, {headers: headers})
        .then(res => dispatch({type: DELETED, payload: res.data}))
        .then(() => fetchList(userId, token)(dispatch))
        .catch(err => dispatch({type: FAIL, payload: err}))
}