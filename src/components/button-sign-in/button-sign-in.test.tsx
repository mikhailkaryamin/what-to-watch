import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import ButtonSignIn from './button-sign-in';

describe(`button sign in`, () => {
  const wrapper = renderer
    .create(
        <Router>
          <ButtonSignIn />
        </Router>
    ).toJSON();

  test(`should render button sign in`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
