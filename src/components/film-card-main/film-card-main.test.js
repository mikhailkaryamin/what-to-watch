import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {AuthStatus} from '../../const.js';
import {initialState} from '../../mocks/initialState.js';

import {FilmCardMain} from './film-card-main.tsx';

const mockStore = configureStore([]);

describe(`Film card main`, () => {
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
            <FilmCardMain
              authStatus={AuthStatus.NO_AUTH}
              promoFilm={FILM_CARD}
            />
          </Router>
        </Provider>
    ).toJSON();

  test(`should render film card main`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
