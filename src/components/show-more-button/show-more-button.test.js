import React from 'react';
import renderer from 'react-test-renderer';

import {ShowMoreButton} from './show-more-button.tsx';

describe(`Render ShowMoreButton`, () => {
  test(`should render ShowMoreButton`, () => {
    const onShowMoreButtonClick = () => {};

    const wrapper = renderer
      .create(
          <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick}/>
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
