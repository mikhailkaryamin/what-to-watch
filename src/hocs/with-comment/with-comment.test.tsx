import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow,
} from 'enzyme';

import withComment from './with-comment';

configure({
  adapter: new Adapter()
});


describe(`with comment HOC`, () => {
  const EVT_MOCK = {
    preventDefault() {
      return;
    }
  };
  const COMMENT_MOCK = {
    type: `comment`,
    value: `some 50 letters`
  };
  const RATING_MOCK = {
    type: `rating`,
    value: 5
  };

  const MockComponent = () => <div />;
  const MockComponentWrapped = withComment(MockComponent);
  const uploadComment = jest.fn();
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
        <MockComponentWrapped
          uploadComment={uploadComment}
          filmId={10}
        />
    );
  });

  test(`should call uploadComment`, () => {
    wrapper.props().onSubmit(EVT_MOCK);

    expect(uploadComment.mock.calls.length).toBe(1);
  });

  test(`should change state: rating and comment`, () => {
    wrapper.props().onChange(RATING_MOCK);
    wrapper.props().onChange(COMMENT_MOCK);

    expect(wrapper.state(`rating`)).toEqual(5);
    expect(wrapper.state(`comment`)).toEqual(`some 50 letters`);
  });

  test(`should isDisabledSubmitButton false`, () => {
    wrapper.setState({
      comment: `Cupidatat ad minim eu pariatur dolor nisi excepteur aliqua in. 
      Aute irure officia nostrud Lorem anim non. 
      Laboris ex tempor veniam sit sint consequat.`,
      rating: 5,
    });

    expect(wrapper.props().isDisabledSubmitButton).toBe(false);
  });
});
