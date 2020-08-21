import React from 'react';

import {bool} from 'prop-types';

import {FilmCardsListType} from '../../const.js';

import FilmCatalog from '../film-catalog/film-catalog.tsx';
import Footer from '../footer/footer.tsx';
import Header from '../header/header.tsx';
import UserPage from '../user-page/user-page.tsx';

const Favorites = (props) => {
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

Favorites.propTypes = {
  isAuth: bool.isRequired,
};

export default Favorites;
