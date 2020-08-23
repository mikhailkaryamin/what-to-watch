import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {FilmCardsListType} from '../../const.js';
import {initialState} from '../../mocks/initialState.js';

import FilmCatalog from './film-catalog.tsx';

const mockStore = configureStore([]);

describe(`FilmCatalog`, () => {
  const store = mockStore(initialState);

  test(`should render film catalog for main`, () => {
    const wrapper = renderer
      .create(
          <Provider store={store}>
            <Router>
              <FilmCatalog
                sign={FilmCardsListType.MAIN}
              />
            </Router>
          </Provider>
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test(`should render film catalog for like this`, () => {
    const wrapper = renderer
      .create(
          <Provider store={store}>
            <FilmCatalog
              sign={FilmCardsListType.LIKE_THIS}
            />
          </Provider>
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

