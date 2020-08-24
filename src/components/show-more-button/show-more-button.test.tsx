import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {ShowMoreButton} from './show-more-button';

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
