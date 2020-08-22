import * as React from 'react';

type Props = {
  previewVideoLink: string,
  posterImage: string,
}

const VideoPlayer: React.FC<Props> = (props: Props) => {
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

export default VideoPlayer;
