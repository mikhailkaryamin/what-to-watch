import React from 'react';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import {initialState} from '../../mocks/initialState.js';

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
});

