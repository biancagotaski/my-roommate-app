import React from 'react';
import { withAuthorization } from '../Session';

const Home = () => (
  <div>
    <h2>Home Page!!!</h2>
    <p>Essa página deve ser acessível somente à usuário logado</p>
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Home);