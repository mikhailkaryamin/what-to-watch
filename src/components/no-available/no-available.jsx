import React from 'react';

import {
  bool,
  string
} from 'prop-types';

import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import UserPage from '../user-page/user-page.jsx';

const NoAvailableFilms = (props) => {
  const {
    isAuth,
    isLink,
    message,
  } = props;

  const MODIFICATOR_CLASS = `logo__link--light`;

  return (
    <UserPage>
      <Header
        isAuth={isAuth}
        isLink={isLink}
        isSignIn={false}
      />
      <div className="sign-in user-page__content">
        <h2 className="page-title">
          {message}
        </h2>
      </div>
      <Footer
        isLink={false}
        modificatorClass={MODIFICATOR_CLASS}
      />
    </UserPage>
  );
};

NoAvailableFilms.propTypes = {
  isAuth: bool.isRequired,
  isLink: bool.isRequired,
  message: string.isRequired,
};

export default NoAvailableFilms;
