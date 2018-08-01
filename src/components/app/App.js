import React, { Component } from 'react';
import './App.css';

import Routes from '../../shared/routes';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">{this.props.name}</h1>
                </header>

                <main className="App-content container-fluid">
                    <Routes />
                </main>
            </div>
        );
    }
}

export default App;
