import React from 'react';
import {
  bool,
  oneOf,
  oneOfType,
  string,
} from 'prop-types';

import ButtonSignIn from '../button-sign-in/button-sign-in.js';
import ButtonUser from '../button-user/button-user.js';
import Logotype from '../logotype/logotype.tsx';

const Header = (props) => {
  const {
    headline,
    isAuth,
    isLink,
    isWithSignIn,
  } = props;

  return (
    <header className="page-header user-page__head">
      <Logotype
        isLink={isLink}
      />

      <h1 className="page-title user-page__title">{headline}</h1>

      {isWithSignIn &&
        <div className="user-block">
          {isAuth
            ? <ButtonUser />
            : <ButtonSignIn />
          }
        </div>
      }
    </header>
  );
};

Header.propTypes = {
  headline: oneOfType([
    string.isRequired,
    oneOf([undefined]).isRequired,
  ]),
  isAuth: bool.isRequired,
  isLink: bool.isRequired,
  isWithSignIn: bool.isRequired,
};

export default Header;
