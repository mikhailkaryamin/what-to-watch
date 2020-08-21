import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import SignIn from './sign-in.tsx';

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
