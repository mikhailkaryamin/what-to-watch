import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import {
  configure,
  shallow,
} from 'enzyme';

import {FavoriteButtonPlace} from '../../const.js';

import {ButtonFavorite} from './button-favorite';

configure({
  adapter: new Adapter(),
});

describe(`button favorite e2e`, () => {
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
  const onRemoveFavorite = jest.fn();
  const onSetFavorite = jest.fn();

  test(`should click remove favorite button`, () => {
    const wrapper = shallow(
        <ButtonFavorite
          film={FILM_CARD}
          isFavorite={true}
          place={FavoriteButtonPlace.DETAILED}
          onRemoveFavorite={onRemoveFavorite}
          onSetFavorite={onSetFavorite}
        />
    );

    const buttonEl = wrapper.find(`.movie-card__button`);
    buttonEl.simulate(`click`);

    expect(onRemoveFavorite.mock.calls.length).toBe(1);
  });


  test(`should click add favorite button`, () => {
    const wrapper = shallow(
        <ButtonFavorite
          film={FILM_CARD}
          isFavorite={false}
          place={FavoriteButtonPlace.DETAILED}
          onRemoveFavorite={onRemoveFavorite}
          onSetFavorite={onSetFavorite}
        />
    );

    const buttonEl = wrapper.find(`.movie-card__button`);
    buttonEl.simulate(`click`);

    expect(onSetFavorite.mock.calls.length).toBe(1);
  });
});
