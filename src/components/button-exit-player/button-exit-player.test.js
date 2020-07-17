import React from 'react';
import renderer from 'react-test-renderer';

import {
  ButtonExitPlayer
} from './button-exit-player.jsx';

describe(`button exit player`, () => {
  const wrapper = renderer
    .create(
        <ButtonExitPlayer
          onButtonExitClick={() => {}}
        />
    ).toJSON();

  test(`should render button exit player`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
