import React, {
  PureComponent
} from 'react';
import {
  arrayOf,
  func,
} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';
import {FilmCardsListType} from '../../const.js';

import FilmCardMain from '../film-card-main/film-card-main.jsx';
import FilmCatalog from '../film-catalog/film-catalog.jsx';
import Footer from '../footer/footer.jsx';

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      filmCards,
      onFilmCardClick,
    } = this.props;

    return (
      <React.Fragment>
        <FilmCardMain filmCard={filmCards[0]}/>

        <div className="page-content">
          <FilmCatalog
            filmCards={filmCards}
            sign={FilmCardsListType.MAIN}
            onFilmCardClick={onFilmCardClick}
          />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  filmCards: arrayOf(
      filmCardPropTypes
  ),
  onFilmCardClick: func,
};

export default Main;
