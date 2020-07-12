import React, {
  PureComponent
} from 'react';

import {connect} from 'react-redux';

import {
  filmPropTypes
} from '../../types.js';
import {
  ButtonType,
  FilmCardsListType,
  FilmDetailedTabsType,
} from '../../const.js';

import Button from '../button/button.jsx';
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
    this.state = {
      currentTypeTab: FilmDetailedTabsType.OVERVIEW,
    };
    this._handleTabTypeChange = this._handleTabTypeChange.bind(this);
  }

  render() {
    const {
      backgroundImage,
      genre,
      name,
      posterImage,
      released,
    } = this.props.currentFilm;

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
                  <Button sign={ButtonType.PLAY} />

                  <Button sign={ButtonType.ADD} />
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
                  currentTypeTab={this.state.currentTypeTab}
                  onTabClick={this._handleTabTypeChange}
                />
                {this._changeTabs()}
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

  _changeTabs() {
    const {
      currentFilm,
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
    } = currentFilm;

    switch (this.state.currentTypeTab) {
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

  _handleTabTypeChange(type) {
    this.setState({
      currentTypeTab: type,
    });
  }
}

FilmPage.propTypes = {
  currentFilm: filmPropTypes,
};

const mapStateToProps = (state) => ({
  currentFilm: state.currentFilm
});

export {
  FilmPage
};

export default connect(mapStateToProps)(FilmPage);

