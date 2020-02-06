import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import firebaseConfig from '../../constants/FirebaseConfig';
import * as firebase from 'firebase/app';
import '@firebase/auth';

if(!firebase.apps.length){
    try {
      firebase.initializeApp(firebaseConfig);
  } catch (err) {
      console.error("Firebase initialization error raised", err.stack);
  }
}

const FIREBASEAPP = firebase;
const FIREBASEAPPAUTH = FIREBASEAPP.auth();
const PROVIDERS = { googleProvider: new firebase.auth.GoogleAuthProvider() };

class FirebaseAuth {
    render(){
      const {
        user,
        signOut,
        signInWithGoogle,
      } = this.props;
      return(
          <div className="">
            {
              user 
                ? <p>Welcome {user.displayName}</p>
                : <p>Sign in with Google</p>
            }
            {
              user
                ? <button onClick={signOut}>Sign out</button>
                : <button onClick={signInWithGoogle}>Sign in with Google</button>
            }
          </div>
      );
    }
}

export default withFirebaseAuth({
  PROVIDERS, FIREBASEAPPAUTH
})(FirebaseAuth);