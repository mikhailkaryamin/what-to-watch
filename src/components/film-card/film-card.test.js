import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './film-card.jsx';

describe(`Film card`, () => {
  const onFilmCardClick = () => {};
  const FILM_CARD = {
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
  };

  const wrapper = renderer
    .create(<FilmCard
      filmCard={FILM_CARD}
      onFilmCardClick={onFilmCardClick}
    />
    );

  test(`should render film card`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

