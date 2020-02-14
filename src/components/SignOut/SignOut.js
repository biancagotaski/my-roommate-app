import React from 'react';
import { withFirebase } from '../Firebase';

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);











// import React, { Component } from 'react';
// // import { withRouter } from 'react-router-dom';
// import { withFirebase } from '../Firebase';
// import * as ROUTES from '../../constants/routes';

// class SignOutButton extends Component{
//     onSubmit = event => {
//         this.props.firebase
//           .doSinOut()
//           .then(() => {
//             this.props.history.push(ROUTES.LANDING);
//           })
//           .catch(error => {
//             this.setState({error});
//           });
    
//         event.preventDefault();
//     };

//     render(){
//         return(
//             <button type="submit">
//                 Sign Out
//             </button>
//         );
//     }
// }

// export default withFirebase(SignOutButton);