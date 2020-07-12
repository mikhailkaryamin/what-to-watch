import React from 'react';
import renderer from 'react-test-renderer';

import {FilmDetailedTabsType} from '../../const.js';

import FilmDetailedTabs from './film-detailed-tabs.jsx';

describe(`Film detailed tabs`, () => {
  const onTabClick = () => {};

  const wrapper = renderer
    .create(<FilmDetailedTabs
      currentTypeTab={FilmDetailedTabsType.OVERVIEW}
      onTabClick={onTabClick}
    />);

  test(`should render film detailed tabs`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
