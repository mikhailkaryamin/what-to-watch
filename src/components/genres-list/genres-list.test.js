import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {
  initialState,
} from '../../mocks/initialState.js';

import GenresList from './genres-list.jsx';

const mockStore = configureStore([]);

describe(`Genres list`, () => {
  const store = mockStore(initialState);
  const onGenreClick = () => {};

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <GenresList onGenreClick={onGenreClick}/>
        </Provider>
    );

  test(`should render genres list`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
