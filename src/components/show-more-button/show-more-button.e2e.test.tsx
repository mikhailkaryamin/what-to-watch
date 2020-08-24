import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow,
} from 'enzyme';

import {ShowMoreButton} from './show-more-button';

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
