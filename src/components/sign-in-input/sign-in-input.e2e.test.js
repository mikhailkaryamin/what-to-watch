import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignInInput from './sign-in-input.tsx';

configure({
  adapter: new Adapter(),
});

describe(`sign in input e2e`, () => {
  let onChange;
  let wrapper;

  beforeEach(() => {
    onChange = jest.fn();

    wrapper = shallow(
        <SignInInput
          onChange={onChange}
        />
    );
  });


  test(`onChange email input should return auth user email`, () => {
    const EMAIL_CHANGE = {
      type: `email`,
      value: `some@email.ru`,
    };
    const inputEmailEl = wrapper.find(`#user-email`);
    inputEmailEl.simulate(`change`, {
      target: {
        value: `some@email.ru`
      }
    });

    expect(onChange.mock.calls.length).toBe(1);

    expect(onChange.mock.calls[0][0]).toEqual(EMAIL_CHANGE);
  });

  test(`onChange password input should return auth user password`, () => {
    const PASSWORD_CHANGE = {
      type: `password`,
      value: `EzPz`,
    };
    const inputEmailEl = wrapper.find(`#user-password`);
    inputEmailEl.simulate(`change`, {
      target: {
        value: `EzPz`
      }
    });

    expect(onChange.mock.calls.length).toBe(1);

    expect(onChange.mock.calls[0][0]).toEqual(PASSWORD_CHANGE);
  });
});
