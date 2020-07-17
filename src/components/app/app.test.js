import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {
  initialState,
  initialStateWithOpenFilm,
  initialStateWithWatchedFilm,
} from '../../mocks/initialState.js';

import App from './app.jsx';

const mockStore = configureStore([]);

describe(`Render App`, () => {

  test(`should render app`, () => {
    const store = mockStore(initialState);

    const wrapper = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test(`should render app with open film`, () => {
    const store = mockStore(initialStateWithOpenFilm);

    const wrapper = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test(`should render app with watched film`, () => {
    const store = mockStore(initialStateWithWatchedFilm);

    const wrapper = renderer
      .create(
          <Provider store={store}>
            <App />
          </Provider>
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

