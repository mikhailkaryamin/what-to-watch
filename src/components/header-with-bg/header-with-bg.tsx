import * as React from 'react';

import ButtonSignIn from '../button-sign-in/button-sign-in';
import ButtonUser from '../button-user/button-user';
import Logotype from '../logotype/logotype';

type Props = {
  backgroundImage: string;
  isAuth: boolean;
  isLink: boolean;
}

const HeaderWithBg: React.FC<Props> = (props: Props) => {
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

export default HeaderWithBg;
