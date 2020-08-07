import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from './sign-in.jsx';

configure({
  adapter: new Adapter(),
});

describe(`sign in`, () => {
  const onChange = () => {};
  const onSubmit = jest.fn();

  test(`disabled submit should block onSubmit`, () => {
    const wrapper = shallow(
        <SignIn
          isDisabledSubmitButton={true}
          onChange={onChange}
          onSubmit={onSubmit}
        />
    );

    const submitButtonEl = wrapper.find(`.sign-in__btn`);

    expect(submitButtonEl.prop(`disabled`)).toBe(true);
  });

  test(`submit should call onSubmit`, () => {
    const wrapper = shallow(
        <SignIn
          isDisabledSubmitButton={false}
          onChange={onChange}
          onSubmit={onSubmit}
        />
    );

    const submitButtonEl = wrapper.find(`.sign-in__btn`);
    const submitFormEl = wrapper.find(`.sign-in__form`);
    submitFormEl.simulate(`submit`);

    expect(submitButtonEl.prop(`disabled`)).toBe(false);
    expect(onSubmit.mock.calls.length).toBe(1);
  });
});