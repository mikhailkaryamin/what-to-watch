import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import NoAvailable from './no-available.tsx';

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
