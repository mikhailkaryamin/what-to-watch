import * as React from 'react';

import Footer from '../footer/footer';
import Header from '../header/header';
import UserPage from '../user-page/user-page';

type Props = {
  isAuth: boolean,
  isLink: boolean,
  isWithSignIn: boolean,
  message: string,
}

const NoAvailableFilms: React.FC<Props> = (props: Props) => {
  const {
    isAuth,
    isLink,
    isWithSignIn,
    message,
  } = props;

  return (
    <UserPage>
      <Header
        isAuth={isAuth}
        isLink={isLink}
        isWithSignIn={isWithSignIn}
      />
      <div className="user-page__content user-page__content--message">
        <h2 className="page-title">
          {message}
        </h2>
      </div>
      <Footer
        isLink={isLink}
      />
    </UserPage>
  );
};

export default NoAvailableFilms;
