import React from 'react';
import renderer from 'react-test-renderer';
import {FilmCardsListType} from '../../const.js';

import FilmCatalog from './film-catalog.jsx';

describe(`FilmCatalog`, () => {
  const FILM_CARDS = [
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 1,
      name: `Devin Albert`,
      posterImage: `img/aviator.jpg`,
      rating: 3,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    },
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 2,
      name: `Devin Albert`,
      posterImage: `img/aviator.jpg`,
      rating: 2,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    },
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 3,
      name: `Devin Albert`,
      posterImage: `img/aviator.jpg`,
      rating: 3,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    }
  ];

  const onFilmCardClick = () => {};

  test(`should render film catalog for main`, () => {
    const wrapper = renderer
    .create(<FilmCatalog
      filmCards={FILM_CARDS}
      onFilmCardClick={onFilmCardClick}
      sign={FilmCardsListType.MAIN}
    />);

    expect(wrapper).toMatchSnapshot();
  });

  test(`should render film catalog for like this`, () => {
    const wrapper = renderer
    .create(<FilmCatalog
      filmCards={FILM_CARDS}
      onFilmCardClick={onFilmCardClick}
      sign={FilmCardsListType.LIKE_THIS}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});

