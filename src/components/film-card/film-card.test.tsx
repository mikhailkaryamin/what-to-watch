import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import FilmCard from './film-card.tsx';

describe(`Film card`, () => {
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

  const wrapper = renderer
    .create(
        <Router>
          <FilmCard
            film={FILM_CARD}
            isPlayVideo={false}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
            onStopPreviewClick={() => {}}
          />
        </Router>
    ).toJSON();

  test(`should render film card`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

