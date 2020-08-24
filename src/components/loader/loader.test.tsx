import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Loader from './loader'

describe(`loader`, () => {
  const wrapper = renderer
    .create(
      <Loader />
    )
  test(`should render loader`, () => {
    expect(wrapper).toMatchSnapshot();
  })
})