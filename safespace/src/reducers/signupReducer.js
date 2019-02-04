import {SEND_SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL} from '../actions';

const initialState = {
    users: [],
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
                users: [
                    ...state,
                    action.payload
                ],
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