import React from 'react';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import Main from './main.jsx';

const initialState = {
  comments: [{
    id: 1,
    user: {
      id: 1,
      name: `Simple name`,
    },
    rating: 9,
    text: `some text`,
    date: 1293843434,
  },
  {
    id: 2,
    user: {
      id: 2,
      name: `Simple name`,
    },
    rating: 6,
    text: `some text`,
    date: 129384343,
  },
  {
    id: 3,
    user: {
      id: 3,
      name: `Simple name`,
    },
    rating: 9,
    text: `some text`,
    date: 12938034343183,
  }],
  currentFilm: null,
  currentGenre: `All genre`,
  films: [
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 1,
      name: `Devin Albert`,
      previewVideoLink: `link`,
      posterImage: `img/aviator.jpg`,
      rating: 3,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    },
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 2,
      name: `Devin Albert`,
      previewVideoLink: `link`,
      posterImage: `img/aviator.jpg`,
      rating: 2,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    },
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 3,
      name: `Devin Albert`,
      previewVideoLink: `link`,
      posterImage: `img/aviator.jpg`,
      rating: 3,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    }
  ],
  filmsByGenre: [
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 1,
      name: `Devin Albert`,
      previewVideoLink: `link`,
      posterImage: `img/aviator.jpg`,
      rating: 3,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    },
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 2,
      name: `Devin Albert`,
      previewVideoLink: `link`,
      posterImage: `img/aviator.jpg`,
      rating: 2,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    },
    {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 3,
      name: `Devin Albert`,
      previewVideoLink: `link`,
      posterImage: `img/aviator.jpg`,
      rating: 3,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    }
  ],
  filmsLikeThis: [],
  genres: [
    `Comedies`,
    `Crime`,
    `Documentary`,
    `Dramas`,
    `Horror`,
    `Kids & Family`,
    `Romance`,
    `Sci-Fi`,
    `Thrillers`,
  ],
  promoFilm: {
    backgroundImage: `img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    director: `Arthur Agee`,
    genre: `Comedy`,
    id: 1,
    name: `Devin Albert`,
    previewVideoLink: `link`,
    posterImage: `img/aviator.jpg`,
    rating: 3,
    released: 2015,
    runTime: 100,
    scoreCount: 300,
    starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
  },
};

const mockStore = configureStore([]);

describe(`Main`, () => {
  const store = mockStore(initialState);

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <Main />
        </Provider>
    );

  test(`should render main`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});

