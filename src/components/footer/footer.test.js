import React from 'react';
import renderer from 'react-test-renderer';

import Footer from './footer.tsx';

describe(`Footer`, () => {
  const wrapper = renderer
    .create(
        <Footer
          isLink={false}
        />
    ).toJSON();

  test(`should render footer`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
