import React from 'react';
import {string} from 'prop-types';

import {AuthorizationStatus} from '../../const.js';

import ButtonSignIn from '../button-sign-in/button-sign-in.jsx';
import ButtonUser from '../button-user/button-user.jsx';
import Logotype from '../logotype/logotype.jsx';

const Header = (props) => {
  const {
    authorizationStatus,
    backgroundImage,
  } = props;

  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logotype />

        <div className="user-block">
          {authorizationStatus === AuthorizationStatus.AUTH &&
            <ButtonUser />
          }

          {authorizationStatus === AuthorizationStatus.NO_AUTH &&
            <ButtonSignIn />
          }
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  authorizationStatus: string.isRequired,
  backgroundImage: string.isRequired,
};

export default Header;
