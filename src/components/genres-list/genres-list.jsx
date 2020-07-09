import React from 'react';

const GENRES = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`,
];

const GenresList = () => {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre, i) => <li
        key={i}
        className={i === 0 ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
      >
        <a href="#" className="catalog__genres-link">
          {genre}
        </a>
      </li>)
      }
    </ul>
  );
};

export default GenresList;
