import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ShowMoreButton} from './show-more-button.jsx';

configure({
  adapter: new Adapter(),
});

describe(`e2e show more button click`, () => {
  const onShowMoreButtonClick = jest.fn();

  const wrapper = shallow(
      <ShowMoreButton onShowMoreButtonClick={onShowMoreButtonClick}/>
  );

  test(`Should show more button click`, () => {
    const showMoreButton = wrapper.find(`.catalog__button`);
    showMoreButton.simulate(`click`);
    expect(onShowMoreButtonClick.mock.calls.length).toBe(1);
  });
});
