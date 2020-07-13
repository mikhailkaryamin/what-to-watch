import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {
  initialState,
} from '../../mocks/initialState.js';

import Main from './main.jsx';

const mockStore = configureStore([]);

describe(`Main`, () => {
  const store = mockStore(initialState);

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <Main />
        </Provider>
    );

  test(`should render main`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

