import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import SignIn from './sign-in';

describe(`sing in`, () => {
  const isDisabledSubmitButton = false;
  const onChange = () => {};
  const onSubmit = () => {};

  const wrapper = renderer
    .create(
        <Router>
          <SignIn
            isAuth={false}
            isDisabledSubmitButton={isDisabledSubmitButton}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </Router>
    ).toJSON();

  test(`should sign in render`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
