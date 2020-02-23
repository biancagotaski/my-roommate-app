import * as admin from 'firebase-admin';
const functions = require('firebase-functions');
const serviceAccount = require('/my-roommate-app-e8ea2ec6bd0e.json');

// The Firebase Admin SDK to access the Firebase Realtime Database.
// const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
    // ...
});

const email = user.email; // The email of the user.
const displayName = user.displayName; // The display name of 

console.log("email: ", `${email}`, " name: ", `${displayName}`);