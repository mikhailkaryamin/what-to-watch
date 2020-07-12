import React from 'react';
import renderer from 'react-test-renderer';

import TabOverview from './tab-overview.jsx';


describe(`Tab overview`, () => {
  const DESCRIPTION = `simple text`;
  const DIRECTOR = `big boss`;
  const RATING = 9;
  const SCORE_COUNT = 100;
  const STARRING = [
    `Mike`,
    `Sam`,
    `John`,
  ];
  const wrapper = renderer
    .create(<TabOverview
      description={DESCRIPTION}
      director={DIRECTOR}
      rating={RATING}
      scoreCount={SCORE_COUNT}
      starring={STARRING}
    />);

  test(`should render tab overview`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
