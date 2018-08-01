import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { Router } from 'react-router-dom';
import history from '../../shared/history';

import store from '../../shared/store';

import App from './App';

it('renders without crashing', () => {
    const appRoot = document.createElement('div');
    
    ReactDOM.render(
        <MuiThemeProvider theme={createMuiTheme()}>
            <Router history={history}>
                <Provider store={store}>
                    <App />
                </Provider>
            </Router>
        </MuiThemeProvider>,
        appRoot
    );
    
    ReactDOM.unmountComponentAtNode(appRoot);
});
