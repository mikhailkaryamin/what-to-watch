import * as React from 'react';

import ButtonSignIn from '../button-sign-in/button-sign-in';
import ButtonUser from '../button-user/button-user';
import Logotype from '../logotype/logotype';

type Props = {
  headline?: string;
  isAuth: boolean;
  isLink: boolean;
  isWithSignIn: boolean;
}

const Header: React.FC<Props> = (props: Props) => {
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

export default Header;
