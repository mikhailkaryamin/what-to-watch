import React from 'react';
import renderer from 'react-test-renderer';

import Main from './main.jsx';

describe(`Main render`, () => {
  const FILM_CARDS = [
    {
      genre: `Crime`,
      name: `Macbeth`,
      posterImage: `img/bg-the-grand-budapest-hotel.jpg`,
      released: 2012,
    },
    {
      genre: `Romance`,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      posterImage: `img/orlando.jpg`,
      released: 2014
    },
    {
      genre: `Drama`,
      name: `Fantastic Beasts: The Crimes of Grindelwald`,
      posterImage: `img/orlando.jpg`,
      released: 2012
    }
  ];

  const onHeadlineButtonClick = () => {};

  const wrapper = renderer
  .create(
      <Main
        filmCards={FILM_CARDS}
        onHeadlineButtonClick={onHeadlineButtonClick}
      />
  );

  test(`render`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

