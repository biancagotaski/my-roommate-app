import React from 'react';

import * as ROLES from '../../constants/roles';
import { withAuthorization } from '../Session';

const ResidentHomePage = () => (
    <div>
        <h1>Página inicial do Inquilino</h1>
        <p>
            Área restrita. Somente os estudantes devem acessar a esta página inicial.
        </p>
    </div>
);

const condition = authUser => authUser && !!authUser.roles[ROLES.TENTANT];

export default withAuthorization(condition)(ResidentHomePage);