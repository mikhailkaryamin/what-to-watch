import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {BrowserRouter as Router} from 'react-router-dom';

import ButtonAddComment from './button-add-comment';

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
