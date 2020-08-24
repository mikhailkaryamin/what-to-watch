import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {BrowserRouter as Router} from 'react-router-dom';

import {ButtonExitPlayer} from './button-exit-player';

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
