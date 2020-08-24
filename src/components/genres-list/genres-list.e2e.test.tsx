import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow
} from 'enzyme';

import {GenresList} from './genres-list';

configure({
  adapter: new Adapter(),
});

describe(`e2e genres list`, () => {
  const CURRENT_GENRE = `All genre`;
  const GENRES = [
    `All genre`,
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
    `Horror`,
    `Kids & Family`,
    `Romance`,
    `Sci-Fi`,
    `Thrillers`,
  ];
  const onGenreClick = jest.fn();

  const wrapper = shallow(
      <GenresList
        currentGenre={CURRENT_GENRE}
        genres={GENRES}
        onGenreClick={onGenreClick}
      />
  );

  test(`Should genre button click then return genre`, () => {
    const genreButton = wrapper.find(`.catalog__genres-item`).first();
    genreButton.simulate(`click`);
    expect(onGenreClick.mock.calls.length).toBe(1);
    expect(onGenreClick.mock.calls[0][0]).toBe(`All genre`);
  });
});

