import * as React from 'react';
import {Redirect} from 'react-router-dom';

import {DataInputSignInType} from '../../types';

import {AppRoute} from '../../const';

import Footer from '../footer/footer';
import Header from '../header/header';
import SignInInput from '../sign-in-input/sign-in-input';
import UserPage from '../user-page/user-page';

type Props = {
  isAuth: boolean;
  isDisabledSubmitButton: boolean;
  onChange: (data: DataInputSignInType) => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const HEADLINE_HEADER = `Sign in`;

const SignIn: React.FC<Props> = (props: Props) => {
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
        <UserPage>

          <Header
            headline={HEADLINE_HEADER}
            isAuth={isAuth}
            isLink={true}
            isWithSignIn={true}
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
          />
        </UserPage>
      }
    </React.Fragment>
  );
};

export default SignIn;
