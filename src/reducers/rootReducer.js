import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import login from './Login';

export default combineReducers({
    login,
    routing: routerReducer
});