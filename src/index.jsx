import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, hashHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';
import routes from './routes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';
import 'bootstrap-material-design/dist/css/ripples.css';
import "bootstrap-material-design/dist/js/material.js";
import 'bootstrap-material-design/dist/js/ripples.js';
import './styles/index.css';

import {createAppStore} from './store/store';
const store = createAppStore();
const history = syncHistoryWithStore(browserHistory, store);
$.material.init();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root'));
