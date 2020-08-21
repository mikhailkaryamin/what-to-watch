import React from 'react';
import {string} from 'prop-types';

const VideoPlayer = (props) => {
  const {
    previewVideoLink,
    posterImage,
  } = props;

  return (
    <video
      autoPlay
      muted
      poster={posterImage}
      src={previewVideoLink}
      height="175"
    />
  );
};

VideoPlayer.propTypes = {
  previewVideoLink: string,
  posterImage: string,
};

export default VideoPlayer;
