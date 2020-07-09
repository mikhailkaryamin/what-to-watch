import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {
  shallow
} from 'enzyme';
import FilmCard from './film-card.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e film card`, () => {
  const FILM_CARD = {
    id: 1,
    genre: `Crime`,
    name: `Macbeth`,
    posterImage: `img/bg-the-grand-budapest-hotel.jpg`,
    released: 2012,
  };
  const onHeadlineButtonClick = jest.fn();
  const onMouseEnter = jest.fn();

  const filmCard = shallow(
      <FilmCard
        filmCard={FILM_CARD}
        onHeadlineButtonClick={onHeadlineButtonClick}
        onMouseEnter={onMouseEnter}
      />
  );

  test(`Should headline click`, () => {
    const headlineButtonEl = filmCard.find(`.small-movie-card__title`);
    headlineButtonEl.simulate(`click`);
    expect(onHeadlineButtonClick.mock.calls.length).toBe(1);
  });

  test(`Should mouse enter`, () => {
    const filmCardEl = filmCard.find(`.small-movie-card`);
    filmCardEl.simulate(`mouseenter`);

    expect(onMouseEnter.mock.calls[0][0]).toEqual(FILM_CARD);
  });
});
