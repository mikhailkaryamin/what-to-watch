import React from 'react';
import renderer from 'react-test-renderer';

import {ButtonPlay} from './button-play.jsx';

describe(`button play`, () => {
  const FILM = {
    backgroundImage: `img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    director: `Arthur Agee`,
    genre: `Comedy`,
    id: 3,
    name: `Devin Albert`,
    posterImage: `img/aviator.jpg`,
    previewVideoLink: `link`,
    rating: 3,
    released: 2015,
    runTime: 100,
    scoreCount: 300,
    starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    video: `some/link`,
  };

  const wrapper = renderer
    .create(
        <ButtonPlay
          film={FILM}
          onPlayButtonClick={() => {}}
        />
    ).toJSON();

  test(`should render button play`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
