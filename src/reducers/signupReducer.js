import {SEND_SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL} from '../actions';

const initialSignupState = {
    isLoading: false,
    displayText: 'sign up',
    hideDone: '',
    error: ''
}

export const signupReducer = (state = initialSignupState, action) => {
    switch (action.type){
        case SEND_SIGNUP:
            return {
                ...state,
                isLoading: true,
                displayText: 'signing up...'
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,
                registered: true,
                displayText: 'welcome to safe space!',
                hideDone: 'hidden'
            }
        case SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                displayText: 'something went wrong :(',
                error: action.payload
            }
        default:
            return state
    }
}