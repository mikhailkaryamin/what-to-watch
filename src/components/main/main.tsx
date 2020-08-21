import React from 'react';

import {FilmCardsListType} from '../../const.js';

import FilmCardMain from '../film-card-main/film-card-main.js';
import FilmCatalog from '../film-catalog/film-catalog.js';
import Footer from '../footer/footer.js';

const Main = () => {
  return (
    <React.Fragment>
      <FilmCardMain />

      <div className="page-content">
        <FilmCatalog
          sign={FilmCardsListType.MAIN}
        />
        <Footer
          isLink={false}
        />
      </div>
    </React.Fragment>
  );
};

export default Main;
