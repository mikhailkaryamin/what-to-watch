import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {FilmDetailedTabsType} from '../../const.js';

import FilmDetailedTabs from './film-detailed-tabs';

describe(`Film detailed tabs`, () => {
  const onTabClick = () => {};

  const wrapper = renderer
    .create(<FilmDetailedTabs
      currentTypeTab={FilmDetailedTabsType.OVERVIEW}
      onTabClick={onTabClick}
    />).toJSON();

  test(`should render film detailed tabs`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
