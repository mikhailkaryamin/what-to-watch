import React from 'react';
import renderer from 'react-test-renderer';
import {ButtonType} from '../../const.js';

import Button from './button.jsx';

describe(`Button component`, () => {

  test(`should render Add button`, () => {
    const wrapper = renderer
      .create(
          <Button sign={ButtonType.LIST}/>
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
