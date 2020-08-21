import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import Logotype from './logotype.tsx';

describe(`logotype`, () => {
  test(`should render logotype not link`, () => {
    const wrapper = renderer
    .create(
        <Router>
          <Logotype
            isLink={false}
          />
        </Router>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test(`should render logotype link`, () => {
    const wrapper = renderer
    .create(
        <Router>
          <Logotype
            isLink={true}
          />
        </Router>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
