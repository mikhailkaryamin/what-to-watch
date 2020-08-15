import React from 'react';
import renderer from 'react-test-renderer';

import {ButtonInFavorite} from './button-in-favorite.jsx';

describe(`Button in favorite component`, () => {
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

  test(`should render button in favorite`, () => {

    const wrapper = renderer
      .create(
          <ButtonInFavorite
            film={FILM_CARD}
            place={``}
            setFavorite={() => {}}
          />
      ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
