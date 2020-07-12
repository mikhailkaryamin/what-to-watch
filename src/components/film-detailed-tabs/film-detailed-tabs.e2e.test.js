import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, {
  shallow,
} from 'enzyme';

import {FilmDetailedTabsType} from '../../const.js';

import FilmDetailedTabs from './film-detailed-tabs.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`e2e film detailed tabs`, () => {
  const onTabClick = jest.fn();

  const wrapper = shallow(
      <FilmDetailedTabs
        currentTypeTab={FilmDetailedTabsType.OVERVIEW}
        onTabClick={onTabClick}
      />
  );

  test(`Should tab click`, () => {
    const tabButtonEl = wrapper.find(`.movie-nav__item--active`);
    tabButtonEl.simulate(`click`);
    expect(onTabClick.mock.calls.length).toBe(1);
    expect(onTabClick.mock.calls[0][0]).toEqual(FilmDetailedTabsType.OVERVIEW);
  });
});
