import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Footer from './footer';

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
