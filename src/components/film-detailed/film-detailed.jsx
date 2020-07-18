import React, {
  PureComponent
} from 'react';
import {connect} from 'react-redux';
import {
  func,
  string
} from 'prop-types';

import {
  filmPropTypes
} from '../../types.js';
import {
  ButtonType,
  FilmCardsListType,
  FilmDetailedTabsType,
} from '../../const.js';
import {getCurrentOpenFilm} from '../../reducer/current-state/selectors.js';

import Button from '../button/button.jsx';
import ButtonPlay from '../button-play/button-play.jsx';
import FilmCatalog from '../film-catalog/film-catalog.jsx';
import FilmDetailedTabs from '../film-detailed-tabs/film-detailed-tabs.jsx';
import TabComments from '../tab-comments/tab-comments.jsx';
import TabDetails from '../tab-details/tab-details.jsx';
import TabOverview from '../tab-overview/tab-overview.jsx';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';

class FilmPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      currentOpenFilm,
      currentTypeTab,
      onTabClick,
    } = this.props;

    const {
      backgroundImage,
      genre,
      name,
      posterImage,
      released,
    } = currentOpenFilm;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <Header
              backgroundImage={backgroundImage}
            />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <ButtonPlay film={currentOpenFilm} />

                  <Button sign={ButtonType.LIST} />
                  <a href="add-review.html" className="btn movie-card__button">Add review</a>
                </div>
              </div>
            </div>
          </div>

          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <div className="movie-card__poster movie-card__poster--big">
                <img src={posterImage} alt={name} width="218" height="327" />
              </div>
              <div className="movie-card__desc">
                <FilmDetailedTabs
                  currentTypeTab={currentTypeTab}
                  onTabClick={onTabClick}
                />
                {this._changeTabs(currentTypeTab)}
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <FilmCatalog
            sign={FilmCardsListType.LIKE_THIS}
          />
          <Footer />
        </div>
      </React.Fragment>
    );
  }

  _changeTabs(currentTypeTab) {
    const {
      currentOpenFilm,
    } = this.props;
    const {
      description,
      director,
      genre,
      rating,
      released,
      runTime,
      scoreCount,
      starring,
    } = currentOpenFilm;

    switch (currentTypeTab) {
      case (FilmDetailedTabsType.DETAILS):
        return <TabDetails
          director={director}
          genre={genre}
          released={released}
          runTime={runTime}
          starring={starring}
        />;
      case (FilmDetailedTabsType.REVIEWS):
        return <TabComments />;
      default:
        return <TabOverview
          description={description}
          director={director}
          rating={rating}
          scoreCount={scoreCount}
          starring={starring}
        />;
    }
  }
}

FilmPage.propTypes = {
  currentOpenFilm: filmPropTypes,
  currentTypeTab: string.isRequired,
  onTabClick: func.isRequired,
};

const mapStateToProps = (state) => ({
  currentOpenFilm: getCurrentOpenFilm(state)
});

export {
  FilmPage
};

export default connect(mapStateToProps)(FilmPage);

