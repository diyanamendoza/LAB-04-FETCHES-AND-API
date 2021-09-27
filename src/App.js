import './App.css';
import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    NavLink,
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import Home from './Home.js';
import DetailPage from './DetailPage.js';

export default class App extends Component {
    
    render() {
        return (
            <div>
                <Router>
                    <header>
                        <NavLink exact activeClassName='active-nav' to='/'>Home</NavLink>
                        <NavLink exact activeClassName='active-nav' to='/pokemon'>Search</NavLink>
                    </header>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <Home {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon" 
                            exact
                            render={(routerProps) => <SearchPage {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}