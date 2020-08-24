import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {TabComments} from './tab-comments';

describe(`Tab comments`, () => {
  const COMMENTS = [{
    id: 1,
    user: {
      id: 1,
      name: `Simple name`,
    },
    rating: 9,
    text: `some text`,
    date: 1293843434,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: `Simple name`,
    },
    rating: 6,
    text: `some text`,
    date: 129384343,
  },
  {
    id: 3,
    user: {
      id: 3,
      name: `Simple name`,
    },
    rating: 9,
    text: `some text`,
    date: 12938034343183,
  }];

  const wrapper = renderer
    .create(
        <TabComments comments={COMMENTS}/>
    ).toJSON();

  test(`should render tab comments`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
