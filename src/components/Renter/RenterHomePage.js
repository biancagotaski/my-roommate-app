import React from 'react';

import * as ROLES from '../../constants/roles';
import { withAuthorization } from '../Session';

const RenterHomePage = () => (
    <div>
        <h1>Página inicial do Locatário</h1>
        <p>
            Área restrita. Somente os Locatários devem acessar a esta página inicial.
        </p>
    </div>
);

const condition = authUser => authUser && !!authUser.roles[ROLES.RENTER];

export default withAuthorization(condition)(RenterHomePage);