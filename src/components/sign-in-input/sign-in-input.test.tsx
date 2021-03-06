import * as React from 'react';
import * as renderer from 'react-test-renderer';

import SignInInput from './sign-in-input';

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
