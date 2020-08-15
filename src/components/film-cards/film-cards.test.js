import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';

import FilmCards from './film-cards.jsx';

describe(`Film cards list`, () => {
  const FILMS = [
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 1,
      isFavorite: true,
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
    },
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 2,
      isFavorite: false,
      name: `Devin Albert`,
      posterImage: `img/aviator.jpg`,
      previewImage: `img/aviator.jpg`,
      previewVideoLink: `link`,
      rating: 2,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
      video: `some/link`,
    },
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 3,
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
    }
  ];

  test(`should render film cards`, () => {
    const wrapper = renderer
    .create(
        <Router>
          <FilmCards
            films={FILMS}
          />
        </Router>
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });

});
