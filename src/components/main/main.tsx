import * as React from 'react';

import {FilmCardsListType} from '../../const';

import FilmCardMain from '../film-card-main/film-card-main';
import FilmCatalog from '../film-catalog/film-catalog';
import Footer from '../footer/footer';

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
