import * as React from 'react';
import * as renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

import Favorites from './favorites';

import {initialState} from '../../mocks/initialState.js';

const mockStore = configureStore([]);

describe(`favorites`, () => {
  const store = mockStore(initialState);

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <Router>
            <Favorites
              isAuth={true}
            />
          </Router>
        </Provider>
    ).toJSON();

  test(`should render favorites`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
