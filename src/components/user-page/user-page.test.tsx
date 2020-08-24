import * as React from 'react';
import * as renderer from 'react-test-renderer';

import UserPage from './user-page';

describe(`user page`, () => {
  const MockComponent = () => <div />;

  const wrapper = renderer
    .create(
        <UserPage>
          <MockComponent />
        </UserPage>
    ).toJSON();

  test(`should render user page`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
