import React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const.js';

const ButtonSignIn = () => {
  return (
    <Link to={AppRoute.LOGIN} className="user-block__link">
      Sign in
    </Link>
  );
};

export default ButtonSignIn;
