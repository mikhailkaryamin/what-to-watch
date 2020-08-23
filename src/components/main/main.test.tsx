import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {initialState} from '../../mocks/initialState.js';

import Main from './main.tsx';

const mockStore = configureStore([]);

describe(`Main`, () => {
  const store = mockStore(initialState);

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <Router>
            <Main />
          </Router>
        </Provider>
    ).toJSON();

  test(`should render main`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

