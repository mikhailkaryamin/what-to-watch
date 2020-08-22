import * as React from 'react';
import {connect} from 'react-redux';

import {FilmCardsListType} from '../../const';
import {FilmType} from '../../types';

import {getFavoriteFilms} from '../../reducer/favorite/selectors';
import {getAmountRenderFilmCard} from '../../reducer/options/selectors';
import {
  getFilmsByGenre,
  getFilmsLikeThis,
} from '../../reducer/films/selectors';

import FilmCards from '../film-cards/film-cards';
import GenresList from '../genres-list/genres-list';
import ShowMoreButton from '../show-more-button/show-more-button';

type Props = {
  amountRenderFilmCard: number,
  filmsFavorite: FilmType[],
  filmsByGenre: FilmType[],
  filmsLikeThis: FilmType[],
  sign: string,
}

const FilmCatalog: React.FC<Props> = (props: Props) => {
  const {
    amountRenderFilmCard,
    filmsFavorite,
    filmsByGenre,
    filmsLikeThis,
    sign,
  } = props;

  return (
    <section className="catalog">

      {sign === FilmCardsListType.FAVORITES &&
              <React.Fragment>
                <h2 className="catalog__title visually-hidden">Catalog</h2>

                <FilmCards
                  films={filmsFavorite}
                />
              </React.Fragment>
      }

      {sign === FilmCardsListType.MAIN &&
        <React.Fragment>
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />

          <FilmCards
            films={filmsByGenre.slice(0, amountRenderFilmCard)}
          />

          {(filmsByGenre.length <= amountRenderFilmCard) ? `` : <ShowMoreButton />}
        </React.Fragment>
      }

      {sign === FilmCardsListType.LIKE_THIS &&
        <React.Fragment>
          <h2 className="catalog__title">
            More like this
          </h2>

          <FilmCards
            films={filmsLikeThis}
            prefix={FilmCardsListType.LIKE_THIS}
          />
        </React.Fragment>
      }

    </section>
  );
};

const mapStateToProps = (state) => ({
  amountRenderFilmCard: getAmountRenderFilmCard(state),
  filmsFavorite: getFavoriteFilms(state),
  filmsByGenre: getFilmsByGenre(state),
  filmsLikeThis: getFilmsLikeThis(state),
});

export {
  FilmCatalog,
};

export default connect(mapStateToProps)(FilmCatalog);
