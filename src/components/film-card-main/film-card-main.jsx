import React from 'react';
import {connect} from 'react-redux';

import {filmPropTypes} from '../../types.js';
import {getPromoFilm} from '../../reducer/films/selectors.js';
import {getAuthStatus} from '../../reducer/user/selectors.js';

import Header from '../header/header.jsx';
import ButtonList from '../button-list/button-list.jsx';
import ButtonPlay from '../button-play/button-play.jsx';
import {string} from 'prop-types';

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
    name,
    posterImage,
    released,
  } = promoFilm;

  return (
    <section className="movie-card">
      <Header
        authStatus={authStatus}
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

              <ButtonList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FilmCardMain.propTypes = {
  authStatus: string.isRequired,
  promoFilm: filmPropTypes,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  promoFilm: getPromoFilm(state),
});

export {
  FilmCardMain
};

export default connect(mapStateToProps)(FilmCardMain);
