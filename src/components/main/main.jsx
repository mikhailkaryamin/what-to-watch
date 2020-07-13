import React, {
  PureComponent
} from 'react';
import {
  arrayOf,
  func,
} from 'prop-types';

import {filmPropTypes} from '../../types.js';
import {FilmCardsListType} from '../../const.js';

import FilmCardMain from '../film-card-main/film-card-main.jsx';
import FilmCatalog from '../film-catalog/film-catalog.jsx';
import Footer from '../footer/footer.jsx';

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <FilmCardMain />

        <div className="page-content">
          <FilmCatalog
            sign={FilmCardsListType.MAIN}
          />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  filmCards: arrayOf(
      filmPropTypes
  ),
  onFilmCardClick: func,
};

export default Main;
