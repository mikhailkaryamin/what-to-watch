import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import {initialState} from '../../mocks/initialState.js';

import ButtonUser from './button-user';

const mockStore = configureStore([]);

describe(`button user`, () => {
  const store = mockStore(initialState);

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <Router>
            <ButtonUser />
          </Router>
        </Provider>
    ).toJSON();

  test(`should render button user`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
