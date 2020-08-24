import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './header';

describe(`Header`, () => {
  const wrapper = renderer
    .create(
        <Router>
          <Header
            isAuth={false}
            isLink={false}
            isWithSignIn={false}
          />
        </Router>
    ).toJSON();

  test(`should render header`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
