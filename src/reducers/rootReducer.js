import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import login from './Login';
import signup from './Signup';
import categories from './Categories';

export default combineReducers({
    login,
    signup,
    categories,
    routing: routerReducer
});