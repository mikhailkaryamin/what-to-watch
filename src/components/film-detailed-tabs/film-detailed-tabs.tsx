import * as React from 'react';

import {FilmDetailedTabsType} from '../../const';

type Props = {
  currentTypeTab: string;
  onTabClick: (type: string) => void;
}

const FilmDetailedTabs: React.FC<Props> = (props: Props) => {
  const {
    currentTypeTab,
    onTabClick,
  } = props;

  return (<nav className="movie-nav movie-card__nav">
    <ul className="movie-nav__list">
      {Object.values(FilmDetailedTabsType).map((type: string) =>
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

export default FilmDetailedTabs;
