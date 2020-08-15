import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from "redux-mock-store";
import {Provider} from 'react-redux';

import {initialState} from '../../mocks/initialState.js';

import RoutePrivate from './route-private.jsx';

const mockStore = configureStore([]);

describe(`route private`, () => {
  const MockComponent = <div />;
  const store = mockStore(initialState);
  const render = () => MockComponent;

  const wrapper = renderer
    .create(
        <Provider
          store={store}
        >
          <Router>
            <RoutePrivate
              exact={true}
              isAuth={true}
              path={``}
              render={render}
            >

            </RoutePrivate>
          </Router>
        </Provider>
    ).toJSON();

  test(`route private`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
