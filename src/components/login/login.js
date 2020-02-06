import React, { Component } from 'react';
import FirebaseAuth from '../auth/Auth';

class Login extends Component {
  render() {
    return (
        <div>
          <h2>Login Page!!!</h2>
          <FirebaseAuth></FirebaseAuth>
        </div>
    );
  }
}

export default Login;