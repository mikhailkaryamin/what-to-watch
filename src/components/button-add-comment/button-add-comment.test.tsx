import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import ButtonAddComment from './button-add-comment.tsx';

describe(`ButtonAddComment render`, () => {
  const FILM_ID = 10;

  test(`should render buttonAddComment`, () => {
    const wrapper = renderer
      .create(
          <Router>
            <ButtonAddComment
              id={FILM_ID}
            />
          </Router>
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
