import React from 'react';
import renderer from 'react-test-renderer';

import SignIn from './sign-in.jsx';

describe(`sing in`, () => {
  const isDisabledSubmitButton = false;
  const onChange = () => {};
  const onSubmit = () => {};

  const wrapper = renderer
    .create(
        <SignIn
          isDisabledSubmitButton={isDisabledSubmitButton}
          onChange={onChange}
          onSubmit={onSubmit}
        />
    ).toJSON();

  test(`should sign in render`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
