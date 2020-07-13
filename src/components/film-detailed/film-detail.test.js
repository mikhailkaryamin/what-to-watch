import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {initialStateWithCurrentFilm} from '../../mocks/initialState.js';

import FilmDetailed from './film-detailed.jsx';

const mockStore = configureStore([]);

describe(`Film detailed`, () => {
  const store = mockStore(initialStateWithCurrentFilm);

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <FilmDetailed />
        </Provider>
    );

  test(`should render film detailed`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
