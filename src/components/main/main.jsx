import React, {
  PureComponent
} from 'react';
import {
  arrayOf,
  func,
} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';

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
      onHeadlineButtonClick,
    } = this.props;

    return (
      <React.Fragment>
        <FilmCardMain filmCard={filmCards[0]}/>

        <div className="page-content">
          <FilmCatalog
            filmCards={filmCards}
            onHeadlineButtonClick={onHeadlineButtonClick}
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
  onHeadlineButtonClick: func,
};

export default Main;
