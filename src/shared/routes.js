import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';
import NotFound from '../containers/NotFound';

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact={true} component={Dashboard} />
                <Route path="*" component={NotFound} />
            </Switch>
        );
    }
}

export default Routes;
