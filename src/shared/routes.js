import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../containers/Dashboard';

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/" exact={true} component={Dashboard} />
            </Switch>
        );
    }
}

export default Routes;
