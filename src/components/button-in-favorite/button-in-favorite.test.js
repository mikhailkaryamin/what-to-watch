import React from 'react';
import renderer from 'react-test-renderer';

import ButtonList from './button-in-favorite.jsx';

describe(`Button in favorite component`, () => {

  test(`should render button in favorite`, () => {
    const wrapper = renderer
      .create(
          <ButtonList />
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
