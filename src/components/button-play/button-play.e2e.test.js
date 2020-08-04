import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {ButtonPlay} from './button-play.jsx';

configure({
  adapter: new Adapter(),
});

describe(`button play e2e`, () => {
  const FILM = {
    backgroundImage: `img/aviator.jpg`,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    director: `Arthur Agee`,
    genre: `Comedy`,
    id: 3,
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

  const onPlayButtonClick = jest.fn();

  const wrapper = shallow(
      <ButtonPlay
        film={FILM}
        onPlayButtonClick={onPlayButtonClick}
      />
  );

  test(`click button should return FILM`, () => {
    const buttonEl = wrapper.find(`.movie-card__button`);

    buttonEl.simulate(`click`);

    expect(onPlayButtonClick.mock.calls.length).toBe(1);

    expect(onPlayButtonClick.mock.calls[0][0]).toBe(FILM);
  });
});
