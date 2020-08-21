import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import renderer from 'react-test-renderer';

import ButtonPlay from './button-play.tsx';

describe(`button play`, () => {
  const FILM = {
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

  const wrapper = renderer
    .create(
        <Router>
          <ButtonPlay
            film={FILM}
          />
        </Router>
    ).toJSON();

  test(`should render button play`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
