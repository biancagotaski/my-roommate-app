import React, { Component } from 'react';
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import LandingPage from '../Landing/LandingPage';
// import SignUpPage from '../SignUp/SignUp';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
//import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home/Home';
//import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

//THIS IS WHERE I CAN USE REDUX IN ORDER TO MANAGER STATES OF THE APPLICATION AND MAINTAIN THIS ORGANIZED
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            authUser: null,
        };
    }

    //react's listener
    componentDidMount(){
        this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
            authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        });
    }

    //sets up the component according to the state.
    componentWillUnmount(){
        this.listener();
    }

    render(){
        return(
            <Router>
                <div>
                    <Navigation authUser={this.state.authUser} />
                    
                    <hr/>

                    <Route exact path={ROUTES.LANDING} component={LandingPage}/>
                    <Route exact path={ROUTES.SIGN_UP} component={SignUpPage}/>
                    <Route exact path={ROUTES.SIGN_IN} component={SignInPage}/>
                    {/* <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage}/> */}
                    <Route exact path={ROUTES.HOME} component={HomePage}/>
                    {/* <Route exact path={ROUTES.ACCOUNT} component={AccountPage}/> */}
                </div>
            </Router>
        );
    }
}

export default withFirebase(App);