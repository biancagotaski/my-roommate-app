import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../components/home/home';
import LandingPage from '../components/landingPage/landingPage';
import Login from '../components/login/login';

class RouterApp extends Component {
    render(){
        return (
            <Router>
                <div>
                <h2>Using BrowserRouter as react Router</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav mr-auto">
                    <li><Link to={'/'} className="nav-link"> Landing Page </Link></li>
                    <li><Link to={'/login'} className="nav-link">Login</Link></li>
                    <li><Link to={'/home'} className="nav-link">Home</Link></li>
                </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/login' component={Login} />
                    <Route path='/home' component={Home} />
                </Switch>
                </div>
            </Router>
        );
    }
}

export default RouterApp;