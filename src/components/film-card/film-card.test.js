import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {
  initialState,
} from '../../mocks/initialState.js';

import FilmCard from './film-card.jsx';

const mockStore = configureStore([]);

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
    previewVideoLink: `link`,
    rating: 3,
    released: 2015,
    runTime: 100,
    scoreCount: 300,
    starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    video: `some/link`,
  };

  const store = mockStore(initialState);

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <FilmCard
            film={FILM_CARD}
            isPlayVideo={false}
            onClick={() => {}}
            onFilmCardClick={onFilmCardClick}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          />
        </Provider>
    ).toJSON();

  test(`should render film card`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

