import React from 'react';
import renderer from 'react-test-renderer';

import {FavoriteButtonPlace} from '../../const.js';

import {ButtonFavorite} from './button-favorite.jsx';

describe(`button favorite`, () => {

  test(`should render button favorite`, () => {

    const wrapper = renderer
      .create(
          <ButtonFavorite
            isFavorite={true}
            place={FavoriteButtonPlace.DETAILED}
            removeFavorite={()=>{}}
            setFavorite={()=>{}}
          />
      ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});

