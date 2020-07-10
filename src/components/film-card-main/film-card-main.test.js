import React from 'react';
import renderer from 'react-test-renderer';

import FilmCardMain from './film-card-main.jsx';

describe(`Film card main`, () => {
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
    .create(<FilmCardMain
      filmCard={FILM_CARD}
    />);

  test(`should render film card main`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
