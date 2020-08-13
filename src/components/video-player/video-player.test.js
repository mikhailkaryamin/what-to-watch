import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';

import {
  initialState,
} from '../../mocks/initialState.js';

import VideoPlayer from './video-player.jsx';

const mockStore = configureStore([]);

describe(`video player`, () => {
  const children = <div />;
  const isPlay = false;
  const progress = 10;
  const playBackTime = `00.00.00`;
  const onPlayButtonClick = () => {};
  const onFullScreenButtonClick = () => {};

  const store = mockStore(initialState);

  const wrapper = renderer
    .create(
        <Provider store={store}>
          <Router>
            <VideoPlayer
              isPlay={isPlay}
              progress={progress}
              playBackTime={playBackTime}
              onPlayButtonClick={onPlayButtonClick}
              onFullScreenButtonClick={onFullScreenButtonClick}
            >
              {children}
            </VideoPlayer>
          </Router>
        </Provider>
    ).toJSON();

  test(`should render video player`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
