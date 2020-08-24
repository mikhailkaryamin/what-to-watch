import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow,
} from 'enzyme';

import {ButtonExitPlayer} from './button-exit-player';

configure({
  adapter: new Adapter(),
});

describe(`button exit player e2e`, () => {
  const onButtonExitClick = jest.fn();
  const wrapper = shallow(
      <ButtonExitPlayer
        onButtonExitClick={onButtonExitClick}
      />
  );

  test(`click button exit player`, () => {
    const buttonEl = wrapper.find(`.player__exit`);
    buttonEl.simulate(`click`);

    expect(onButtonExitClick.mock.calls.length).toBe(1);
  });
});
