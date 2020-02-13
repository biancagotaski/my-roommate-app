// const firebaseConfig = {
//     apiKey: "AIzaSyAbHVlyqeHGrTo5iAQYltZv-uwrf4GwfnM",
//     authDomain: "my-roommate-app.firebaseapp.com",
//     databaseURL: "https://my-roommate-app.firebaseio.com",
//     projectId: "my-roommate-app",
//     storageBucket: "my-roommate-app.appspot.com",
//     messagingSenderId: "317039132853",
//     appId: "1:317039132853:web:3d5e8d78089327f0073efc",
//     measurementId: "G-BCSW471B2W"
// };
import app from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default class Firebase{
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }

    //Here is where I use the firebase API to use all kind of auth methods
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

    // doSignInWithGoogle = () => this.auth.GoogleAuthProvider();

    // this.auth.GoogleAuthProvider();

}