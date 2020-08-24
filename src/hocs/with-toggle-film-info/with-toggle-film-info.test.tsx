import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow,
} from 'enzyme';

import withToggleFilmInfo from './with-toggle-film-info';

configure({
  adapter: new Adapter()
});

describe(`with toggle film info HOC`, () => {
  const FILM_CARD = {
    backgroundImage: `img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    director: `Arthur Agee`,
    genre: `Comedy`,
    id: 1,
    isFavorite: false,
    name: `Devin Albert`,
    posterImage: `img/aviator.jpg`,
    previewImage: `img/aviator.jpg`,
    previewVideoLink: `link`,
    rating: 3,
    released: 2015,
    runTime: 100,
    scoreCount: 300,
    starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    video: `some/link`,
  };
  const MockComponent = () => <div />;
  const MockComponentWrapped = withToggleFilmInfo(MockComponent);

  const wrapper = shallow(
      <MockComponentWrapped
        film={FILM_CARD}
      />
  );

  test(`onTabClick should change type in state`, () => {
    wrapper.props().onTabClick(`some type`);
    expect(wrapper.state(`currentTypeTab`)).toBe(`some type`);
  });
});
