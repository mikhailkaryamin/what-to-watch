import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import Header from './header.jsx';

describe(`Header`, () => {
  const wrapper = renderer
    .create(
        <Router>
          <Header
            isAuth={false}
            isLink={false}
            isSignIn={false}
          />
        </Router>
    ).toJSON();

  test(`should render header`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
