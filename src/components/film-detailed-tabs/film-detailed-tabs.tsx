import React from 'react';
import {
  func,
  string
} from 'prop-types';

import {FilmDetailedTabsType} from '../../const.js';

const FilmDetailedTabs = (props) => {
  const {
    currentTypeTab,
    onTabClick,
  } = props;

  return (<nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {Object.values(FilmDetailedTabsType).map((type) =>
        <li
          key={type}
          className={
            `movie-nav__item ${currentTypeTab === type ? `movie-nav__item--active` : ``}`
          }
          onClick={() => {
            onTabClick(type);
          }}
        >
          <a href="#" className="movie-nav__link">
            {type}
          </a>
        </li>
      )}
    </ul>
  </nav>);
};

FilmDetailedTabs.propTypes = {
  currentTypeTab: string,
  onTabClick: func,
};

export default FilmDetailedTabs;
