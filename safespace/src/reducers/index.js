import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { listReducer } from './listReducer';

export default combineReducers({
    signupReducer,
    loginReducer,
    listReducer,
});
