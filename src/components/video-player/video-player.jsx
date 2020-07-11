import React, {
  PureComponent
} from 'react';
import {string} from 'prop-types';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      previewVideoLink,
      posterImage,
    } = this.props;

    return (
      <video
        autoPlay
        muted
        poster={posterImage}
        src={previewVideoLink}
      >

      </video>
    );
  }
}

VideoPlayer.propTypes = {
  previewVideoLink: string,
  posterImage: string,
};

export default VideoPlayer;
