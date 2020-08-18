import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {FavoriteButtonPlace} from '../../const.js';

import {ButtonFavorite} from './button-favorite.jsx';

configure({
  adapter: new Adapter(),
});

describe(`button favorite e2e`, () => {
  const onRemoveFavorite = jest.fn();
  const onSetFavorite = jest.fn();

  test(`should click remove favorite button`, () => {
    const wrapper = shallow(
        <ButtonFavorite
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
