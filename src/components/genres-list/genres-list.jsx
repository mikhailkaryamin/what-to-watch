import React from 'react';
import {connect} from 'react-redux';
import {
  arrayOf,
  func,
  string,
} from 'prop-types';

import {
  getFilmsByGenre,
  setCurrentGenre
} from '../../actions/actions.js';

const GenresList = (props) => {
  const {
    currentGenre,
    genres,
    onGenreClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => <li
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

GenresList.propTypes = {
  currentGenre: string.isRequired,
  genres: arrayOf(string).isRequired,
  onGenreClick: func.isRequired,
};

export {
  GenresList
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: state.genres,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(setCurrentGenre(genre));
    dispatch(getFilmsByGenre(genre));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
