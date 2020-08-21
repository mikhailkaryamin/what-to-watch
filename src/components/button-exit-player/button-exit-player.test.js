import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import renderer from 'react-test-renderer';

import {ButtonExitPlayer} from './button-exit-player.tsx';

describe(`button exit player`, () => {
  const wrapper = renderer
    .create(
        <Router>
          <ButtonExitPlayer
            onButtonExitClick={() => {}}
          />
        </Router>
    ).toJSON();

  test(`should render button exit player`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
