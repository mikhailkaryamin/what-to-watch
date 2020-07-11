import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayer from './video-player.jsx';

describe(`Video player`, () => {
  const PREVIEW_VIDEO_LINK = `https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.480p.vp9.webm`;
  const POSTER_IMAGE = `img/bg-the-grand-budapest-hotel.jpg`;

  const wrapper = renderer
    .create(<VideoPlayer
      previewVideoLink={PREVIEW_VIDEO_LINK}
      posterImage={POSTER_IMAGE}
    />);

  test(`should render video player`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
