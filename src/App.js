import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui';
import React, { Component } from 'react';

import Header from './Header';
import Home from './Home';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/'>
                                <div>
                                    <Header/>
                                    <Home/>
                                </div>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
