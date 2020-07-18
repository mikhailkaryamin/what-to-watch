import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow
} from 'enzyme';

import {FilmCard} from './film-card.jsx';

configure({
  adapter: new Adapter(),
});

describe(`e2e film card`, () => {
  const FILM_CARD = {
    backgroundImage: `img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    director: `Arthur Agee`,
    genre: `Comedy`,
    id: 1,
    name: `Devin Albert`,
    posterImage: `img/aviator.jpg`,
    previewVideoLink: `link`,
    rating: 3,
    released: 2015,
    runTime: 100,
    scoreCount: 300,
    starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    video: `some/link`,
  };

  const onFilmCardClick = jest.fn();

  const wrapper = shallow(
      <FilmCard
        isPlayVideo={false}
        film={FILM_CARD}
        onStopPreviewClick={() => {}}
        onFilmCardClick={onFilmCardClick}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  );

  test(`Should film card click then return FILM_CARD`, () => {
    const filmCardEl = wrapper.find(`.small-movie-card`);
    filmCardEl.simulate(`click`);
    expect(onFilmCardClick.mock.calls.length).toBe(1);
    expect(onFilmCardClick.mock.calls[0][0]).toEqual(FILM_CARD);
  });
});
