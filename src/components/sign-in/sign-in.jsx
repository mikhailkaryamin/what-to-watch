import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  func,
  bool
} from 'prop-types';

import Footer from '../footer/footer.jsx';
import Logotype from '../logotype/logotype.jsx';
import SignInInput from '../sign-in-input/sign-in-input.jsx';

import {AppRoute} from '../../const.js';


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
          <header className="page-header user-page__head">
            <Logotype
              isLink={true}
            />

            <h1 className="page-title user-page__title">
              Sign in
            </h1>
          </header>

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
