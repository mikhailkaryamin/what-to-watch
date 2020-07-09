import React from 'react';
import renderer from 'react-test-renderer';

import FilmCardMain from './film-card-main.jsx';

describe(`Film card main`, () => {
  const FILM_CARD = {
    id: 1,
    genre: `Crime`,
    name: `Macbeth`,
    posterImage: `img/bg-the-grand-budapest-hotel.jpg`,
    released: 2012,
  };

  const wrapper = renderer
    .create(<FilmCardMain
      filmCard={FILM_CARD}
    />);

  test(`render`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
