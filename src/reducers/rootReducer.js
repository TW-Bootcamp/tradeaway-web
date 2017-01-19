import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import login from './Login';
import signup from './Signup';
import email from './EmailVerify';
import categories from './Categories';

export default combineReducers({
    login,
    signup,
    email,
    categories,
    routing: routerReducer
});