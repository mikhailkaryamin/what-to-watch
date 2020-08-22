import * as React from 'react';
import {connect} from 'react-redux';

import {ActionCreator as ActionOptions} from '../../reducer/options/options';
import {getGenre} from '../../reducer/options/selectors';
import {getGenres} from '../../reducer/films/selectors';

type Props = {
  currentGenre: string,
  genres: string[],
  onGenreClick: (arg0: string) => void,
}

const GenresList: React.FC<Props> = (props: Props) => {
  const {
    currentGenre,
    genres,
    onGenreClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre: string) => <li
        key={genre}
        className={genre === currentGenre ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
        onClick={() => {
          onGenreClick(genre);
        }}
      >
        <a href="#" className="catalog__genres-link">
          {genre}
        </a>
      </li>)
      }
    </ul>
  );
};

export {GenresList};

const mapStateToProps = (state) => ({
  currentGenre: getGenre(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionOptions.resetAmountRenderFilmCard());
    dispatch(ActionOptions.setGenre(genre));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
