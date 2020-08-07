import React from 'react';
import renderer from 'react-test-renderer';

import ButtonAddComment from './button-add-comment.jsx';

describe(`ButtonAddComment render`, () => {
  test(`should render buttonAddComment`, () => {
    const wrapper = renderer
      .create(
          <ButtonAddComment />
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
