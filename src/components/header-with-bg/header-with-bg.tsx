import React from 'react';
import {
  bool,
  string,
} from 'prop-types';

import ButtonSignIn from '../button-sign-in/button-sign-in.js';
import ButtonUser from '../button-user/button-user.js';
import Logotype from '../logotype/logotype.tsx';

const HeaderWithBg = (props) => {
  const {
    backgroundImage,
    isAuth,
    isLink,
  } = props;

  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logotype
          isLink={isLink}
        />

        <div className="user-block">

          {isAuth
            ? <ButtonUser />
            : <ButtonSignIn />
          }

        </div>
      </header>
    </React.Fragment>
  );
};

HeaderWithBg.propTypes = {
  backgroundImage: string.isRequired,
  isAuth: bool.isRequired,
  isLink: bool.isRequired,
};

export default HeaderWithBg;
