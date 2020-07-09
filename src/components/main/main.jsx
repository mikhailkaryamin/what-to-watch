import React, {
  PureComponent
} from 'react';
import {arrayOf} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';

const GENRES = [
  `All genres`,
  `Comedies`,
  `Crime`,
  `Documentary`,
  `Dramas`,
  `Horror`,
  `Kids & Family`,
  `Romance`,
  `Sci-Fi`,
  `Thrillers`,
];

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {filmCards} = this.props;

    const {
      name,
      released,
      genre,
      posterImage,
    } = filmCards[0];

    return (
      <React.Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">
            <div className="logo">
              <a className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={posterImage} alt={name} width="218" height="327" />
              </div>

              <div className="movie-card__desc">
                <h2 className="movie-card__title">{name}</h2>
                <p className="movie-card__meta">
                  <span className="movie-card__genre">{genre}</span>
                  <span className="movie-card__year">{released}</span>
                </p>

                <div className="movie-card__buttons">
                  <button className="btn btn--play movie-card__button" type="button" >
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>
                  <button className="btn btn--list movie-card__button" type="button">
                    <svg viewBox="0 0 19 20" width="19" height="20">
                      <use xlinkHref="#add"></use>
                    </svg>
                    <span>My list</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <ul className="catalog__genres-list">
              {this._getGenresListMarkup()}
            </ul>

            <div className="catalog__movies-list">
              {this._getFilmsCardMarkup()}
            </div>

            <div className="catalog__more">
              <button className="catalog__button" type="button">Show more</button>
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a className="logo__link logo__link--light">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <div className="copyright">
              <p>© 2019 What to watch Ltd.</p>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }

  _getFilmsCardMarkup() {
    const {
      filmCards,
    } = this.props;

    const filmsCardMarkup = filmCards.map((card, i) => {
      return (
        <article
          key={i}
          className="small-movie-card catalog__movies-card"
        >
          <div
            className="small-movie-card__image"
          >
            <img
              src={card.posterImage}
              alt={card.name}
              width="280"
              height="175"
            />
          </div>
          <h3
            className="small-movie-card__title"
          >
            <a
              className="small-movie-card__link"
              href="movie-page.html"
            >
              {card.name}
            </a>
          </h3>
        </article>
      );
    });

    return filmsCardMarkup;
  }

  _getGenresListMarkup() {
    return (
      GENRES.map((genre, i) => <li
        key={i}
        className={i === 0 ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`}
      >
        <a href="#" className="catalog__genres-link">
          {genre}
        </a>
      </li>)
    );
  }
}

Main.propTypes = {
  filmCards: arrayOf(
      filmCardPropTypes
  ),
};

export default Main;
