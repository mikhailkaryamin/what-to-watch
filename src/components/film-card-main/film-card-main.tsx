import * as React from 'react';
import {connect} from 'react-redux';

import {FilmType} from '../../types';

import {
  AuthStatus,
  FavoriteButtonPlace
} from '../../const';

import {getPromoFilm} from '../../reducer/films/selectors';
import {getAuthStatus} from '../../reducer/user/selectors';

import HeaderWithBg from '../header-with-bg/header-with-bg';
import ButtonFavorite from '../button-favorite/button-favorite';
import ButtonPlay from '../button-play/button-play';

type Props = {
  authStatus: string | null,
  promoFilm: FilmType,
}

const FilmCardMain: React.FC<Props> = (props: Props) => {
  const {
    authStatus,
    promoFilm
  } = props;

  if (!promoFilm) {
    return <div />;
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

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  promoFilm: getPromoFilm(state),
});

export {FilmCardMain};

export default connect(mapStateToProps)(FilmCardMain);
