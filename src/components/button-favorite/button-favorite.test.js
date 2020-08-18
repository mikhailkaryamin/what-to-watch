import React from 'react';
import renderer from 'react-test-renderer';

import {FavoriteButtonPlace} from '../../const.js';

import {ButtonFavorite} from './button-favorite.jsx';

describe(`button favorite`, () => {

  test(`should render button remove favorite`, () => {

    const wrapper = renderer
      .create(
          <ButtonFavorite
            isFavorite={true}
            place={FavoriteButtonPlace.DETAILED}
            onRemoveFavorite={()=>{}}
            onSetFavorite={()=>{}}
          />
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  test(`should render button in favorite`, () => {

    const wrapper = renderer
      .create(
          <ButtonFavorite
            isFavorite={false}
            place={FavoriteButtonPlace.DETAILED}
            onRemoveFavorite={()=>{}}
            onSetFavorite={()=>{}}
          />
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

