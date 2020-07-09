import React from 'react';
import renderer from 'react-test-renderer';

import FilmCatalog from './film-catalog.jsx';

describe(`FilmCatalog`, () => {
  const FILM_CARDS = [
    {
      id: 1,
      genre: `Crime`,
      name: `Macbeth`,
      posterImage: `img/bg-the-grand-budapest-hotel.jpg`,
      released: 2012,
    },
    {
      id: 2,
      genre: `Romance`,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      posterImage: `img/orlando.jpg`,
      released: 2014
    },
    {
      id: 3,
      genre: `Drama`,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      posterImage: `img/orlando.jpg`,
      released: 2012
    }
  ];

  const onHeadlineButtonClick = () => {};

  const wrapper = renderer
    .create(<FilmCatalog
      filmCards={FILM_CARDS}
      onHeadlineButtonClick={onHeadlineButtonClick}
    />);

  test(`render film catalog`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

