import React from 'react';
import renderer from 'react-test-renderer';
import {ButtonType} from '../../const.js';

import Button from './button.jsx';

describe(`Button component`, () => {

  test(`should render Play button`, () => {
    const wrapper = renderer
    .create(<Button sign={ButtonType.PLAY}/>);

    expect(wrapper).toMatchSnapshot();
  });

  test(`should render Add button`, () => {
    const wrapper = renderer
      .create(<Button sign={ButtonType.LIST}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
