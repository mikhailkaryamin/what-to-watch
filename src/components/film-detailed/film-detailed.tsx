import * as React from 'react';
import {connect} from 'react-redux';

import {FilmType} from '../../types';

import {
  AuthStatus,
  FavoriteButtonPlace,
  FilmCardsListType,
  FilmDetailedTabsType,
} from '../../const';

import {getAuthStatus} from '../../reducer/user/selectors';

import ButtonAddComment from '../button-add-comment/button-add-comment';
import ButtonFavorite from '../button-favorite/button-favorite';
import ButtonPlay from '../button-play/button-play';
import FilmCatalog from '../film-catalog/film-catalog';
import FilmDetailedTabs from '../film-detailed-tabs/film-detailed-tabs';
import TabComments from '../tab-comments/tab-comments';
import TabDetails from '../tab-details/tab-details';
import TabOverview from '../tab-overview/tab-overview';
import Footer from '../footer/footer';
import HeaderWithBg from '../header-with-bg/header-with-bg';

type Props = {
  authStatus: string | null,
  film: FilmType,
  currentTypeTab: string,
  onTabClick: () => void,
}

const changeTabs = (film, currentTypeTab) => {
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
};

const FilmDetailed: React.FC<Props> = (props: Props) => {
  const {
    authStatus,
    film,
    currentTypeTab,
    onTabClick,
  } = props;

  const {
    backgroundImage,
    genre,
    id,
    isFavorite,
    name,
    posterImage,
    released,
  } = film;

  const isAuth = authStatus === AuthStatus.AUTH;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <HeaderWithBg
            backgroundImage={backgroundImage}
            isAuth={isAuth}
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

                {isAuth &&
                  <React.Fragment>
                    <ButtonFavorite
                      film={film}
                      isFavorite={isFavorite}
                      place={FavoriteButtonPlace.DETAILED}
                    />
                    <ButtonAddComment
                      id={id}
                    />
                  </React.Fragment>
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
              {changeTabs(film, currentTypeTab)}
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
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
});

export {FilmDetailed};

export default connect(mapStateToProps)(FilmDetailed);
