import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { appReducer, stockHistoryReducer } from '../reducers';
import stockMiddleware from '../middlewares/stockMiddleware';

export default createStore(
    combineReducers({
        app: appReducer,
        history: stockHistoryReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk, stockMiddleware)
    )
);
