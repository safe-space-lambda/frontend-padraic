import { combineReducers } from 'redux';
import { signupReducer } from './signupReducer';
import { loginReducer } from './loginReducer';
import { listReducer } from './listReducer';

import axios from 'axios';

axios.defaults.withCredentials = true;

export default combineReducers({
    signupReducer,
    loginReducer,
    listReducer,
});
