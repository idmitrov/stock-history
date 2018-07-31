import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Router } from 'react-router-dom';
import history from './shared/history';

import store from './shared/store';

import './index.css';
import App from './components/app/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
