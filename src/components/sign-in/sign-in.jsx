import React from 'react';
import {
  func,
  bool
} from 'prop-types';

import Footer from '../footer/footer.jsx';
import Logotype from '../logotype/logotype.jsx';
import SignInInput from '../sign-in-input/sign-in-input.jsx';


const MODIFICATOR_CLASS = `logo__link--light`;

const SignIn = (props) => {
  const {
    isDisabledSubmitButton,
    onChange,
    onSubmit,
  } = props;

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logotype />

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
        modificatorClass={MODIFICATOR_CLASS}
      />
    </div>
  );
};

SignIn.propTypes = {
  isDisabledSubmitButton: bool.isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
};

export default SignIn;
