import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  func,
  bool
} from 'prop-types';

import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';
import SignInInput from '../sign-in-input/sign-in-input.jsx';

import {AppRoute} from '../../const.js';

const HEADLINE_HEADER = `Sign in`;
const MODIFICATOR_CLASS = `logo__link--light`;

const SignIn = (props) => {
  const {
    isAuth,
    isDisabledSubmitButton,
    onChange,
    onSubmit,
  } = props;

  return (
    <React.Fragment>
      {isAuth &&
        <Redirect to={AppRoute.ROOT} />
      }

      {isAuth ||
        <div className="user-page">

          <Header
            headline={HEADLINE_HEADER}
            isAuth={isAuth}
            isLink={true}
            isSignIn={true}
          />

          <div className="sign-in user-page__content">
            <form
              action="#"
              className="sign-in__form"
              onSubmit={onSubmit}
            >

              <SignInInput
                onChange={onChange}
              />

              <div className="sign-in__submit">
                <button
                  className="sign-in__btn"
                  type="submit"
                  disabled={isDisabledSubmitButton}
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>

          <Footer
            isLink={true}
            modificatorClass={MODIFICATOR_CLASS}
          />
        </div>
      }
    </React.Fragment>
  );
};

SignIn.propTypes = {
  isAuth: bool.isRequired,
  isDisabledSubmitButton: bool.isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default SignIn;
