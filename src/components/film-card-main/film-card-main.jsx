import React from 'react';
import {connect} from 'react-redux';

import {filmPropTypes} from '../../types.js';
import {ButtonType} from '../../const.js';

import Header from '../header/header.jsx';
import Button from '../button/button.jsx';

const FilmCardMain = (props) => {
  const {
    backgroundImage,
    genre,
    name,
    posterImage,
    released,
  } = props.promoFilm;

  return (
    <section className="movie-card">
      <Header
        backgroundImage={backgroundImage}
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

            <div className="movie-card__buttons">
              <Button sign={ButtonType.PLAY} />

              <Button sign={ButtonType.ADD} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FilmCardMain.propTypes = {
  promoFilm: filmPropTypes,
};

const mapStateToProps = (state) => ({
  promoFilm: state.promoFilm,
});

export {
  FilmCardMain
};

export default connect(mapStateToProps)(FilmCardMain);
