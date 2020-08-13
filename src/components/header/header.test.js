import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import {AuthStatus} from '../../const.js';

import Header from './header.jsx';

describe(`Header`, () => {
  const BG_IMAGE = `img/aviator.jpg`;

  const wrapper = renderer
    .create(
        <Router>
          <Header
            authStatus={AuthStatus.NO_AUTH}
            backgroundImage={BG_IMAGE}
            isLink={false}
          />
        </Router>
    ).toJSON();

  test(`should render header`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
