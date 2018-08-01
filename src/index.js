import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Router } from 'react-router-dom';
import history from './shared/history';

import store from './shared/store';

import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/app/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider theme={createMuiTheme()}>
        <Router history={history}>
            <Provider store={store}>
                <App name="Stock history" />
            </Provider>
        </Router>
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
