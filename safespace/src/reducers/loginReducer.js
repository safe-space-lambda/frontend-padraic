import {SEND_LOGIN, LOGIN_SUCCESS, LOGIN_FAIL} from '../actions';

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: ''
}

const loginReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_LOGIN:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                isLoading: false
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}

export default loginReducer;