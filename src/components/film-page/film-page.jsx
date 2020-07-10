import React, {
  PureComponent
} from 'react';

import {filmCardPropTypes} from '../../types.js';
import {
  ButtonType,
  FilmCardsListType,
} from '../../const.js';

import Button from '../button/button.jsx';
import FilmCatalog from '../film-catalog/film-catalog.jsx';
import Footer from '../footer/footer.jsx';
import Header from '../header/header.jsx';

const LevelRating = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10,
};

class FilmPage extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      backgroundImage,
      description,
      director,
      genre,
      name,
      posterImage,
      rating,
      released,
      scoreCount,
      starring,
    } = this.props.filmCard;

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
                <nav className="movie-nav movie-card__nav">
                  <ul className="movie-nav__list">
                    <li className="movie-nav__item movie-nav__item--active">
                      <a href="#" className="movie-nav__link">Overview</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Details</a>
                    </li>
                    <li className="movie-nav__item">
                      <a href="#" className="movie-nav__link">Reviews</a>
                    </li>
                  </ul>
                </nav>

                <div className="movie-rating">
                  <div className="movie-rating__score">
                    {rating}
                  </div>
                  <p className="movie-rating__meta">
                    <span className="movie-rating__level">
                      {this._getFilmRatingLevel()}
                    </span>
                    <span className="movie-rating__count">
                      {scoreCount} ratings
                    </span>
                  </p>
                </div>

                <div className="movie-card__text">
                  {description}

                  <p className="movie-card__director">
                    <strong>
                      Director: {director}
                    </strong>
                  </p>

                  <p className="movie-card__starring">
                    <strong>
                      Starring: {starring}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page-content">
          <FilmCatalog
            {...this.props}
            sign={FilmCardsListType.LIKE_THIS}
          />
          <Footer />
        </div>
      </React.Fragment>
    );
  }

  _getFilmRatingLevel() {
    const {
      rating
    } = this.props.filmCard;
    let ratingLevel = ``;

    switch (true) {
      case (rating >= LevelRating.AWESOME):
        ratingLevel = `Awesome`;
        break;
      case (rating >= LevelRating.VERY_GOOD):
        ratingLevel = `Very good`;
        break;
      case (rating >= LevelRating.GOOD):
        ratingLevel = `Good`;
        break;
      case (rating >= LevelRating.NORMAL):
        ratingLevel = `Normal`;
        break;
      case (rating >= LevelRating.BAD):
        ratingLevel = `Bad`;
        break;
    }

    return ratingLevel;
  }
}

FilmPage.propTypes = {
  filmCard: filmCardPropTypes,
};

export default FilmPage;

