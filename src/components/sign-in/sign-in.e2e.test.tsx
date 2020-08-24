import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow,
} from 'enzyme';

import SignIn from './sign-in';

configure({
  adapter: new Adapter(),
});

describe(`sign in`, () => {
  const onChange = () => {};
  const onSubmit = jest.fn();

  test(`disabled submit should block onSubmit`, () => {
    const wrapper = shallow(
        <SignIn
          isAuth={false}
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
          isAuth={false}
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
