import * as React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow,
} from 'enzyme';

import Comment from './comment.tsx';

configure({
  adapter: new Adapter()
});

describe(`comment`, () => {
  let onChange;
  let onSubmit;
  let wrapper;

  beforeEach(() => {
    onChange = jest.fn();
    onSubmit = jest.fn();
    wrapper = shallow(
        <Comment
          filmId={10}
          isDisabledSubmitButton={true}
          onChange={onChange}
          onSubmit={onSubmit}
          statusUploadComment={null}
        />
    );
  });


  test(`onChange rating input should return rating`, () => {
    const RATING_CHANGE = {
      type: `rating`,
      value: 5,
    };

    const inputRatingEl = wrapper.find(`#star-5`);

    inputRatingEl.simulate(`change`, {
      target: {
        value: 5
      }
    });

    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toEqual(RATING_CHANGE);
  });

  test(`onChange text comment should return text comment`, () => {
    const COMMENT_CHANGE = {
      type: `comment`,
      value: `some text 50 letters`
    };

    const textAreaCommentEl = wrapper.find(`#review-text`);

    textAreaCommentEl.simulate(`change`, {
      target: {
        value: `some text 50 letters`
      }
    });

    expect(onChange.mock.calls.length).toBe(1);
    expect(onChange.mock.calls[0][0]).toEqual(COMMENT_CHANGE);
  });
});
