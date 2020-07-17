import React, {
  createRef,
  PureComponent,
} from 'react';
import {string} from 'prop-types';

import {
  SpaceKeyName,
} from '../../const.js';

const DEFAULT_PLAYBACK_TIME = `00:00:00`;
const TargetType = {
  BUTTON: `button`,
  VIDEO: `VIDEO`,
};

const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isFullscreen: false,
        isPlay: false,
        playBackTime: DEFAULT_PLAYBACK_TIME,
        progress: 0,
      };

      this._addListenerPlayVideo = this._addListenerPlayVideo.bind(this);
      this._changePlayBackTime = this._changePlayBackTime.bind(this);
      this._handleSpaceKeyDown = this._handleSpaceKeyDown.bind(this);
      this._playVideo = this._playVideo.bind(this);
      this._setPause = this._setPause.bind(this);
      this._setPlay = this._setPlay.bind(this);
      this._setStateFullScreenVideo = this._setStateFullScreenVideo.bind(this);
      this._timer = null;
      this._toggleFullScreen = this._toggleFullScreen.bind(this);
      this._videoRef = createRef();
    }

    componentDidMount() {
      const videoRef = this._videoRef.current;

      if (videoRef) {
        document.addEventListener(`keydown`, this._handleSpaceKeyDown);
        this._addListenerPlayVideo();
        document.addEventListener(`fullscreenchange`, this._setStateFullScreenVideo);
      }
    }

    componentDidUpdate() {
      const duration = this._videoRef.current.duration;
      const playBackTime = this._videoRef.current.currentTime;

      if (duration <= playBackTime) {
        this.setState({
          playBackTime: DEFAULT_PLAYBACK_TIME,
          isPlay: false,
        });
      }

    }

    componentWillUnmount() {
      document.removeEventListener(`fullscreenchange`, this._setStateFullScreenVideo);
      document.removeEventListener(`keydown`, this._handleSpaceKeyDown);
      this._videoRef.current.removeEventListener(`pause`, this._setPause);
      this._videoRef = null;
      clearInterval(this._timer);
    }

    render() {
      const {
        video,
        posterImage
      } = this.props;

      return (
        <Component
          {...this.props}
          isPlay={this.state.isPlay}
          progress={this.state.progress}
          playBackTime={this.state.playBackTime}
          onPlayButtonClick={this._playVideo}
          onFullScreenButtonClick={this._toggleFullScreen}
        >
          <video
            className="player__video"
            controls={this.state.isFullscreen}
            poster={posterImage}
            ref={this._videoRef}
            src={video}
          ></video>
        </Component>
      );
    }

    _addListenerPlayVideo() {
      this._videoRef.current.addEventListener(`play`, this._setPlay);

      this._videoRef.current.addEventListener(`pause`, this._setPause);
    }


    _handleSpaceKeyDown(evt) {
      const isSpaceKey = evt.code === SpaceKeyName.TEXT || evt.keyCode === SpaceKeyName.CODE;
      const targetButton = evt.target.type === TargetType.BUTTON;
      const targetVideo = evt.target.tagName === TargetType.VIDEO;

      if (isSpaceKey && !targetButton && !targetVideo) {
        this._playVideo();
      }
    }

    _changePlayBackTime() {
      const duration = this._videoRef.current.duration;
      const playBackTime = this._videoRef.current.currentTime;

      const getProgress = () => {
        const progress = Math.ceil(playBackTime) / (Math.floor(duration) / 100);
        if (progress > 100) {
          return false;
        }

        return progress;
      };

      this.setState({
        playBackTime: this._getPlaybackTimeHhMmSs(this._videoRef.current.currentTime),
        progress: getProgress(),
      });

    }

    _getPlaybackTimeHhMmSs(time) {
      const playBackTime = {
        h: `00`,
        m: `00`,
        s: `00`,
      };

      let timeToSecond = Math.floor(time);

      switch (true) {
        case timeToSecond >= 3600:
          playBackTime.h = Math.floor(timeToSecond / 3600);
          playBackTime.m = Math.floor((timeToSecond % 3600) / 60);
          playBackTime.s = playBackTime.m % 60;
          break;
        case (timeToSecond < 3600) && (timeToSecond > 60):
          playBackTime.m = Math.floor(timeToSecond / 60);
          playBackTime.s = timeToSecond % 60;
          break;
        case timeToSecond < 60:
          playBackTime.s = timeToSecond;
      }

      Object.keys(playBackTime).forEach((key) => {

        if (playBackTime[key] < 10 && playBackTime[key] !== `00`) {

          playBackTime[key] = `0` + playBackTime[key];

        }
      });

      return (`${playBackTime.h}:${playBackTime.m}:${playBackTime.s}`);
    }

    _playVideo() {
      const videoPlayer = this._videoRef.current;

      if (this.state.isPlay) {
        videoPlayer.pause();
      } else {
        videoPlayer.play();

        this._changePlayBackTime();
      }
    }

    _setPause() {
      this.setState({
        isPlay: false,
      });

      clearInterval(this._timer);
    }

    _setPlay() {
      this.setState({
        isPlay: true,
      });

      this._timer = setInterval(this._changePlayBackTime, 1000);
    }

    _setStateFullScreenVideo() {
      if (document.fullscreenElement) {
        this.setState({
          isFullscreen: true,
        });
      } else {
        this.setState({
          isFullscreen: false,
        });
      }
    }

    _toggleFullScreen() {
      const video = this._videoRef.current;

      if (!document.fullscreenElement) {
        video.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  }

  WithVideoPlayer.propTypes = {
    posterImage: string.isRequired,
    video: string.isRequired,
  };

  return WithVideoPlayer;
};

export default withVideoPlayer;

