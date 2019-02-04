import { combineReducers } from 'redux';
import { signupReducer, loginReducer, listReducer, formReducer } from './loginReducer';

export default combineReducers({
    signupReducer,
    loginReducer,
    listReducer,
    formReducer
});
