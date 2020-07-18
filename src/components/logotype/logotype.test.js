import React from 'react';
import renderer from 'react-test-renderer';

import Logotype from './logotype.jsx';

describe(`logotype`, () => {
  const wrapper = renderer
    .create(
        <Logotype />
    ).toJSON();

  test(`should render logotype`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
