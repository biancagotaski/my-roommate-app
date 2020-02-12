import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase';

//This FirebaseContext.Provider allows that the firebase be initializated at the time that the application is initializated as well
// Since firebase can be initializated only once and it needs to be used in any part of the application
// Any other part of the application who needs to use this firebase instance, should use FirebaseContext.Consume
ReactDOM.render(
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
