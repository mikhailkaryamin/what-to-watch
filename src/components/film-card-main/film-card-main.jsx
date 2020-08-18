import React from 'react';
import {connect} from 'react-redux';

import {
  oneOf,
  oneOfType,
  string,
} from 'prop-types';
import {filmPropTypes} from '../../types.js';

import {
  AuthStatus,
  FavoriteButtonPlace
} from '../../const.js';

import {getPromoFilm} from '../../reducer/films/selectors.js';
import {getAuthStatus} from '../../reducer/user/selectors.js';

import HeaderWithBg from '../header-with-bg/header-with-bg.jsx';
import ButtonFavorite from '../button-favorite/button-favorite.jsx';
import ButtonPlay from '../button-play/button-play.jsx';

const FilmCardMain = (props) => {
  const {
    authStatus,
    promoFilm
  } = props;

  if (!promoFilm) {
    return false;
  }

  const {
    backgroundImage,
    genre,
    isFavorite,
    name,
    posterImage,
    released,
  } = promoFilm;

  const isAuth = authStatus === AuthStatus.AUTH;

  return (
    <section className="movie-card">
      <HeaderWithBg
        isAuth={isAuth}
        backgroundImage={backgroundImage}
        isLink={false}
      />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            <div className="movie-card__buttons" >
              <ButtonPlay film={promoFilm} />

              {isAuth && <ButtonFavorite
                film={promoFilm}
                isFavorite={isFavorite}
                place={FavoriteButtonPlace.MAIN}
              />}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FilmCardMain.propTypes = {
  authStatus: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
  promoFilm: filmPropTypes,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  promoFilm: getPromoFilm(state),
});

export {FilmCardMain};

export default connect(mapStateToProps)(FilmCardMain);
