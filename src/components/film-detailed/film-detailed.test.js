import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {initialState} from '../../mocks/initialState.js';
import {
  AuthStatus,
  FilmDetailedTabsType
} from '../../const.js';

import {FilmDetailed} from './film-detailed.tsx';

const mockStore = configureStore([]);

describe(`Film detailed`, () => {
  const FILM_CARD = {
    backgroundImage: `img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    director: `Arthur Agee`,
    genre: `Comedy`,
    id: 1,
    isFavorite: false,
    name: `Devin Albert`,
    posterImage: `img/aviator.jpg`,
    previewImage: `img/aviator.jpg`,
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
          <Router>
            <FilmDetailed
              authStatus={AuthStatus.NO_AUTH}
              currentTypeTab={FilmDetailedTabsType.OVERVIEW}
              film={FILM_CARD}
              onTabClick={() => {}}
            />
          </Router>
        </Provider>
    ).toJSON();

  test(`should render film detailed`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
