import {SEND_SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL} from '../actions';

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: ''
}

const signupReducer = (state = initialState, action) => {
    switch (action.type){
        case SEND_SIGNUP:
            return {
                ...state,
                isLoading: true
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                isLoading: false
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}

export default signupReducer;