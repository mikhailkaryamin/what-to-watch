import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import ButtonSignIn from './button-sign-in.tsx';

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
