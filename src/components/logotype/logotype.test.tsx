import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import Logotype from './logotype';

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
