import React from 'react';
import renderer from 'react-test-renderer';

import FilmCard from './film-card.jsx';

describe(`Film card`, () => {
  const FILM_CARD = {
    id: 1,
    genre: `Crime`,
    name: `Macbeth`,
    posterImage: `img/bg-the-grand-budapest-hotel.jpg`,
    released: 2012,
  };

  const onMouseEnter = () => {};
  const onMouseLeave = () => {};


  const wrapper = renderer
    .create(<FilmCard
      filmCard={FILM_CARD}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    />
    );

  test(`render`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

