import React from 'react';
const FirebaseContext = React.createContext(null);

//NOT SURE IF THE ... IS SINE SYMBOLIC CODE TO DO REFERENCE TO SOMETHING
export const withFirebase = Component => props => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext;