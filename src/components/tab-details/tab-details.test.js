import React from 'react';
import renderer from 'react-test-renderer';

import TabDetails from './tab-details.tsx';

describe(`Tab details`, () => {
  const DIRECTOR = `big boss`;
  const GENRE = `comedy`;
  const RELEASED = 2005;
  const RUN_TIME = 200;
  const STARRING = [
    `Mike`,
    `Sam`,
    `John`,
  ];

  const wrapper = renderer
    .create(
        <TabDetails
          director={DIRECTOR}
          genre={GENRE}
          released={RELEASED}
          runTime={RUN_TIME}
          starring={STARRING}
        />
    ).toJSON();

  test(`should render tab details`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
