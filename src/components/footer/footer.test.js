import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './footer.jsx';

describe(`Footer`, () => {
  const wrapper = renderer
    .create(
        <Footer />
    ).toJSON();

  test(`should render footer`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
