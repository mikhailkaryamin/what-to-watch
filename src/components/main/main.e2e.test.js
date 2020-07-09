import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {
  shallow
} from 'enzyme';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e main`, () => {
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
  const onHeadlineButtonClick = jest.fn();

  const main = shallow(
      <Main
        filmCards={FILM_CARDS}
        onHeadlineButtonClick={onHeadlineButtonClick}
      />
  );

  test(`Should headline click`, () => {
    const headlineButtonEl = main.find(`.small-movie-card__title`);
    headlineButtonEl.forEach((node) => node.simulate(`click`));
    expect(onHeadlineButtonClick.mock.calls.length).toBe(FILM_CARDS.length);
  });
});
