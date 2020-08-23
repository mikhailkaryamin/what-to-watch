import * as React from 'react';
import {connect} from 'react-redux';

import {FilmType} from '../../types';

import {Operation as FavoriteOperation} from '../../reducer/favorite/favorite';

type Props = {
  film: FilmType,
  isFavorite: boolean,
  place: string,
  onSetFavorite: (arg0: FilmType, arg1: string) => void,
  onRemoveFavorite: (arg0: FilmType, arg1: string) => void,
}

const ButtonFavorite: React.FC<Props> = (props: Props) => {
  const {
    film,
    isFavorite,
    place,
    onRemoveFavorite,
    onSetFavorite,
  } = props;

  const getButtonInFavorite = () => {
    return (
      <button
        className="btn movie-card__button btn--list"
        type="button"
        onClick={() => onSetFavorite(film, place)}
      >

        <svg width="19" height="20" viewBox="0 0 19 20">
          <use xlinkHref="#add"></use>
        </svg>

        <span>
          My list
        </span>
      </button>
    );
  };

  const getButtonRemoveFavorite = () => {
    return (
      <button
        className="btn movie-card__button btn--list"
        type="button"
        onClick={() => onRemoveFavorite(film, place)}
      >
        <svg width="18" height="14" viewBox="0 0 18 14">
          <use xlinkHref="#in-list"></use>
        </svg>

        <span>
          My list
        </span>
      </button>
    );
  };

  return (
    isFavorite
      ? getButtonRemoveFavorite()
      : getButtonInFavorite()
  );
};

const mapDispatchToProps = (dispatch: (arg0: () => void) => void) => ({
  onRemoveFavorite: (film: FilmType, place: string) => {
    dispatch(FavoriteOperation.removeFavoriteFilm(film, place));
  },
  onSetFavorite: (film: FilmType, place: string) => {
    dispatch(FavoriteOperation.setFavoriteFilm(film, place));
  }
});

export {ButtonFavorite};

export default connect(null, mapDispatchToProps)(ButtonFavorite);
