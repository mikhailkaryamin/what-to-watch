import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withAuthorization from './with-authorization.tsx';

configure({
  adapter: new Adapter(),
});

describe(`with authorization HOC`, () => {
  const EVT_MOCK = {
    preventDefault() {
      return;
    }
  };
  const EMAIL_MOCK = {
    type: `email`,
    value: `some@mail.ru`
  };
  const PASSWORD_MOCK = {
    type: `password`,
    value: `eZZZ`
  };

  const MockComponent = () => <div />;
  const MockComponentWrapped = withAuthorization(MockComponent);
  const signIn = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <MockComponentWrapped
          signIn={signIn}
        />
    );
  });

  test(`should call onSign`, () => {
    wrapper.props().onSubmit(EVT_MOCK);

    expect(signIn.mock.calls.length).toBe(1);
  });

  test(`should change state: email and password`, () => {
    wrapper.props().onChange(EMAIL_MOCK);
    wrapper.props().onChange(PASSWORD_MOCK);

    expect(wrapper.state(`email`)).toEqual(`some@mail.ru`);
    expect(wrapper.state(`password`)).toEqual(`eZZZ`);
  });

  test(`should isDisabledSubmitButton true`, () => {
    expect(wrapper.props().isDisabledSubmitButton).toBe(true);
  });

  test(`should isDisabledSubmitButton false`, () => {
    wrapper.setState({
      email: `test@mail.ru`,
      password: `pass`
    });
    expect(wrapper.props().isDisabledSubmitButton).toBe(false);
  });
});
