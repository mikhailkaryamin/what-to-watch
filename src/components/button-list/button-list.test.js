import React from 'react';
import renderer from 'react-test-renderer';

import ButtonList from './button-list.jsx';

describe(`ButtonList component`, () => {

  test(`should render Add button`, () => {
    const wrapper = renderer
      .create(
          <ButtonList />
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
