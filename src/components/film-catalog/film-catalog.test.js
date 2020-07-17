import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {FilmCardsListType} from '../../const.js';
import {
  initialState,
} from '../../mocks/initialState.js';

import FilmCatalog from './film-catalog.jsx';

const mockStore = configureStore([]);

describe(`FilmCatalog`, () => {
  const store = mockStore(initialState);

  test(`should render film catalog for main`, () => {
    const wrapper = renderer
      .create(
          <Provider store={store}>
            <FilmCatalog
              sign={FilmCardsListType.MAIN}
            />
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

