import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {FilmCardsListType} from '../../const.js';

import {
  initialState,
} from '../../mocks/initialState.js';

import FilmCardsList from './film-cards-list.jsx';

const mockStore = configureStore([]);

describe(`Film cards list`, () => {
  const store = mockStore(initialState);

  test(`should render for like this`, () => {
    const wrapper = renderer
    .create(
        <Provider store={store}>
          <FilmCardsList
            sign={FilmCardsListType.LIKE_THIS}
          />
        </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });

  test(`should render for main`, () => {
    const wrapper = renderer
    .create(
        <Provider store={store}>
          <FilmCardsList
            sign={FilmCardsListType.MAIN}
          />
        </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
