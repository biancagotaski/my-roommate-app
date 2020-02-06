import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import LandingPage from './components/landingPage/LandingPage';
import Login from './components/login/Login';
import * as ROUTES from './constants/routes';

class RouterApp extends Component {
    render(){
        return (
            <Router>
                <div>
                <h2>Using BrowserRouter as react Router</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={ROUTES.LANDING} className="nav-link"> Landing Page </Link></li>
                    <li><Link to={ROUTES.LOGIN} className="nav-link">Login</Link></li>
                    <li><Link to={ROUTES.HOME} className="nav-link">Home</Link></li>
                </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path={ROUTES.LANDING} component={LandingPage} />
                    <Route path={ROUTES.LOGIN} component={Login} />
                    <Route path={ROUTES.HOME} component={Home} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default RouterApp;