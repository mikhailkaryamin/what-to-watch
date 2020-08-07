import React from 'react';
import renderer from 'react-test-renderer';

import SignInInput from './sign-in-input.jsx';

describe(`sing in input`, () => {
  const onChange = () => {};

  const wrapper = renderer
    .create(
        <SignInInput
          onChange={onChange}
        />
    ).toJSON();

  test(`should render sign in input`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});