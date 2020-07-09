import React from 'react';
import renderer from 'react-test-renderer';

import GenresList from './genres-list.jsx';

describe(`Genres list`, () => {
  const wrapper = renderer
    .create(<GenresList />);

  test(`Render`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
