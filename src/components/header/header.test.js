import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header.jsx';

describe(`Header`, () => {
  const BG_IMAGE = `img/aviator.jpg`;

  const wrapper = renderer
    .create(<Header backgroundImage={BG_IMAGE} />);

  test(`should render header`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
