import React from 'react';
import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
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
    
    render() {
        return(
            <AuthUserContext.Provider value={this.state.authUser}>
                <Component {...this.props} />
            </AuthUserContext.Provider>
        );
    }
  }
  return withFirebase(WithAuthentication);
};

export default withAuthentication;