import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import NoAvailable from './no-available';

describe(`no available`, () => {
  const wrapper = renderer
    .create(
        <Router>
          <NoAvailable
            isAuth={false}
            isLink={true}
            isWithSignIn={true}
            message={`some message`}
          />
        </Router>
    ).toJSON();

  test(`should render no available`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
