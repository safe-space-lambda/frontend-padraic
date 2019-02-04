import axios from 'axios';

export const SEND_SIGNUP = 'SEND_SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';


export const signup = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(`localhost:5000/api/register`, x)
        .then(res => dispatch({type: SIGNUP_SUCCESS, payload: res.data}))
        .catch(err => dispatch({type: SIGNUP_FAIL, payload: err}));
}

export const SEND_LOGIN = 'SEND_LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = x => dispatch => {
    dispatch({type: SEND_LOGIN});
    axios.post(`localhost:5000`, x)
        .then(res => dispatch({type: LOGIN_SUCCESS, payload: res.data}))
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
    axios.get(`localhost:5000`)
        .then(res => dispatch({type: FETCHED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const addMsg = x => dispatch => {
    dispatch({type: ADDING});
    axios.post(`localhost:5000`, x)
        .then(res => dispatch({type: ADDED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const updateMsg = (id, x) => dispatch => {
    dispatch({type: UPDATING});
    axios.put(`localhost:5000`, x)
        .then(res => dispatch({type: UPDATED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}

export const deleteMsg = id => dispatch => {
    dispatch({type: DELETING});
    axios.delete(`localhost:5000`)
        .then(res => dispatch({type: DELETED, payload: res.data}))
        .catch(err => dispatch({type: FAIL, payload: err}));
}