import * as React from 'react';

import {FilmCardsListType} from '../../const';

import FilmCatalog from '../film-catalog/film-catalog';
import Footer from '../footer/footer';
import Header from '../header/header';
import UserPage from '../user-page/user-page';

type Props = {
  isAuth: boolean,
}

const Favorites: React.FC<Props> = (props: Props) => {
  const {
    isAuth,
  } = props;

  const HEADLINE_HEADER = `My list`;

  return (
    <UserPage>
      <Header
        headline={HEADLINE_HEADER}
        isAuth={isAuth}
        isLink={true}
        isWithSignIn={false}
      />
      <FilmCatalog
        sign={FilmCardsListType.FAVORITES}
      />
      <Footer
        isLink={true}
      />
    </UserPage>
  );
};

export default Favorites;
