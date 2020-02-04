import React, { Component } from 'react';
import RouterApp from './constants/routes';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import '@firebase/auth';
import firebaseConfig from './constants/firebaseConfig';

if(!firebase.apps.length){
  try {
    firebase.initializeApp(firebaseConfig);
} catch (err) {
    console.error("Firebase initialization error raised", err.stack);
}
}
const firebaseApp = firebase;
const firebaseAppAuth = firebaseApp.auth();
const providers = { googleProvider: new firebase.auth.GoogleAuthProvider() };

class App extends Component {
  render(){
    const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
    return (
      <div className="App">
      <header className="App-header">
        {
          user 
            ? <p>Hello, {user.displayName}</p>
            : <p>Please sign in.</p>
        }
        {
          user
            ? <button onClick={signOut}>Sign out</button>
            : <button onClick={signInWithGoogle}>Sign in with Google</button>
        }
      </header>
    </div>

      // <div>
      //   <RouterApp></RouterApp>
      //     <div>
      //       {
      //         user ? [ <p>Hello, {user.displayName}</p> ] : [ <p>Please sign in.</p> ]
      //       }
      //       {
      //         user ? [ <button onClick={signOut}>Sign out</button> ] : [ <button onClick={signInWithGoogle}>Sign in with Google</button> ]
      //       }
      //     </div>
      // </div>
    );
  }
}

export default withFirebaseAuth({
  providers, firebaseAppAuth
})(App);
