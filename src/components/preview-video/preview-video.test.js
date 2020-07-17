import React from 'react';
import renderer from 'react-test-renderer';

import PreviewVideo from './preview-video.jsx';

describe(`Preview video`, () => {
  const PREVIEW_VIDEO_LINK = `https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.480p.vp9.webm`;
  const POSTER_IMAGE = `img/bg-the-grand-budapest-hotel.jpg`;

  const wrapper = renderer
    .create(
        <PreviewVideo
          previewVideoLink={PREVIEW_VIDEO_LINK}
          posterImage={POSTER_IMAGE}
        />
    ).toJSON();

  test(`should render preview video`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
