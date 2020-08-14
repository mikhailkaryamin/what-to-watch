import React, {
  PureComponent
} from 'react';
import {connect} from 'react-redux';
import {
  func,
  string
} from 'prop-types';

import {filmPropTypes} from '../../types.js';
import {
  AuthStatus,
  FilmCardsListType,
  FilmDetailedTabsType,
} from '../../const.js';

import {getAuthStatus} from '../../reducer/user/selectors.js';

import ButtonAddComment from '../button-add-comment/button-add-comment.jsx';
import ButtonInFavorite from '../button-in-favorite/button-in-favorite.jsx';
import ButtonPlay from '../button-play/button-play.jsx';
import ButtonRemoveFavorite from '../button-remove-favorite/button-remove-favorite.jsx';
import FilmCatalog from '../film-catalog/film-catalog.jsx';
import FilmDetailedTabs from '../film-detailed-tabs/film-detailed-tabs.jsx';
import TabComments from '../tab-comments/tab-comments.jsx';
import TabDetails from '../tab-details/tab-details.jsx';
import TabOverview from '../tab-overview/tab-overview.jsx';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';

class FilmDetailed extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      authStatus,
      film,
      currentTypeTab,
      onTabClick,
    } = this.props;

    const {
      backgroundImage,
      genre,
      isFavorite,
      id,
      name,
      posterImage,
      released,
    } = film;

    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <Header
              authStatus={authStatus}
              backgroundImage={backgroundImage}
              isLink={true}
            />

            <div className="movie-card__wrap">
              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <ButtonPlay film={film} />

                  {isFavorite
                    ? <ButtonRemoveFavorite id={id} />
                    : <ButtonInFavorite id={id} />
                  }

                  {authStatus === AuthStatus.AUTH &&
                    <ButtonAddComment
                      id={id}
                    />
                  }

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
          <Footer
            isLink={true}
          />
        </div>
      </React.Fragment>
    );
  }

  _changeTabs(currentTypeTab) {
    const {
      film,
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
    } = film;

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

FilmDetailed.propTypes = {
  authStatus: string.isRequired,
  film: filmPropTypes,
  currentTypeTab: string.isRequired,
  onTabClick: func.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

export {FilmDetailed};

export default connect(mapStateToProps)(FilmDetailed);

