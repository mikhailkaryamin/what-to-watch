import * as React from 'react';
import renderer from 'react-test-renderer';

import Comment from './comment.tsx';

describe(`comment`, () => {
  const wrapper = renderer
    .create(
        <Comment
          filmId={10}
          isDisabledSubmitButton={true}
          onChange={() => {}}
          onSubmit={() => {}}
          statusUploadComment={null}
        />
    ).toJSON();

  test(`should render comment`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
