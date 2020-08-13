import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {FilmCardsListType} from '../../const.js';
import {initialState} from '../../mocks/initialState.js';

import FilmCards from './film-cards.jsx';

const mockStore = configureStore([]);

describe(`Film cards list`, () => {
  const store = mockStore(initialState);

  test(`should render for like this`, () => {
    const wrapper = renderer
    .create(
        <Provider store={store}>
          <FilmCards
            sign={FilmCardsListType.LIKE_THIS}
          />
        </Provider>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test(`should render for main`, () => {
    const wrapper = renderer
    .create(
        <Provider store={store}>
          <Router>
            <FilmCards
              sign={FilmCardsListType.MAIN}
            />
          </Router>
        </Provider>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
