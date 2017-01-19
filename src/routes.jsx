import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Login from './components/Login';
import Signup from './components/Signup';
import Seller from './components/Seller';
import Buyer from './components/Buyer';
import EmailVerification from './components/EmailVerification';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="signup" component={Signup}/>
        <Route path="seller" component={Seller}/>
        <Route path="buyer" component={Buyer}/>
        <Route path="verify" component={EmailVerification}/>
    </Route>
);
