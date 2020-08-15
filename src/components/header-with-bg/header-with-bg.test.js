import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import HeaderWithBg from './header-with-bg.jsx';

describe(`HeaderWithBg`, () => {
  const BG_IMAGE = `img/aviator.jpg`;

  const wrapper = renderer
    .create(
        <Router>
          <HeaderWithBg
            backgroundImage={BG_IMAGE}
            isAuth={false}
            isLink={false}
          />
        </Router>
    ).toJSON();

  test(`should render HeaderWithBg`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
