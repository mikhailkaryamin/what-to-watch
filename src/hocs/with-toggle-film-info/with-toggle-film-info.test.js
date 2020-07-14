import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withToggleFilmInfo from './with-toggle-film-info.jsx';

configure({
  adapter: new Adapter()
});

describe(`with toggle film info HOC`, () => {
  const MockComponent = () => <div />;
  const MockComponentWrapped = withToggleFilmInfo(MockComponent);

  const wrapper = shallow(
      <MockComponentWrapped />
  );

  test(`onTabClick should change type in state`, () => {
    wrapper.props().onTabClick(`some type`);
    expect(wrapper.state(`currentTypeTab`)).toBe(`some type`);
  });
});
