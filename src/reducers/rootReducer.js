import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import login from './Login';
import signup from './Signup';

export default combineReducers({
    login,
    signup,
    routing: routerReducer
});