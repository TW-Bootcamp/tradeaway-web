import thunk from 'redux-thunk';
import {applyMiddleware, compose, createStore,} from 'redux';
import rootReducer from '../reducers/rootReducer';
import {login, logger} from '../middlewares/SessionStorage'

export function createAppStore() {
    const middleware = applyMiddleware(thunk, login, logger);
    const createStoreWithMiddleware = compose(
        middleware,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );
    return createStoreWithMiddleware(createStore)(rootReducer, {});
}