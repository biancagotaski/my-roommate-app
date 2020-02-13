import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing/LandingPage';
// import SignUpPage from '../SignUp/SignUp';
import SignUpPage from '../SignUp/SignUp';
import SignInPage from '../SignIn/SignIn';
//import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home/Home';
//import AccountPage from '../Account';

import * as ROUTES from '../../constants/routes';

const App = () => (
    <Router>
        <div>
            <Navigation/>
            
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

export default App;