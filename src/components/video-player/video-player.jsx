import React, {
  createRef,
  PureComponent,
} from 'react';

import {
  SpaceKeyName,
} from '../../const.js';
import {
  string
} from 'prop-types';

import ButtonExitPlayer from '../button-exit-player/button-exit-player.jsx';

const DEFAULT_PLAYBACK_TIME = `00:00:00`;
const TargetType = {
  BUTTON: `button`,
  VIDEO: `VIDEO`,
};

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isFullscreen: false,
      isPlay: false,
      playBackTime: DEFAULT_PLAYBACK_TIME,
      progress: 0,
    };
    this._changePlayBackTime = this._changePlayBackTime.bind(this);
    this._handleSpaceKeyDown = this._handleSpaceKeyDown.bind(this);
    this._playButtonEl = null;
    this._playVideo = this._playVideo.bind(this);
    this._setStateFullScreenVideo = this._setStateFullScreenVideo.bind(this);
    this._setStatePlayVideo = this._setStatePlayVideo.bind(this);
    this._timer = null;
    this._toggleFullScreen = this._toggleFullScreen.bind(this);
    this._videoRef = createRef();
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._handleSpaceKeyDown);
    this._setStatePlayVideo();
    this._setStateFullScreenVideo();
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

  render() {
    const {
      progress
    } = this.state;

    const {
      posterImage,
      video,
    } = this.props;

    return (
      <div className="player">
        <video
          src={video}
          className="player__video"
          poster={posterImage}
          ref={this._videoRef}
          controls={this.state.isFullscreen}
        ></video>

        <ButtonExitPlayer />

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: progress + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">
              {this.state.playBackTime}
            </div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={() => {
                this._playVideo();
              }}
            >

              {this._setIconPlay(this.state.isPlay)}

            </button>

            <div className="player__name">Transpotting</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={() => {
                this._toggleFullScreen();
              }}
            >
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
    );
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

  _setIconPlay(isPlay) {
    if (isPlay) {
      return (
        <React.Fragment>
          <svg viewBox="0 0 14 21" width="14" height="21">
            <use xlinkHref="#pause"></use>
          </svg>
          <span>Pause</span>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <svg viewBox="0 0 19 19" width="19" height="19">
            <use xlinkHref="#play-s"></use>
          </svg>
          <span>Play</span>
        </React.Fragment>
      );
    }
  }

  _setStatePlayVideo() {
    this._videoRef.current.addEventListener(`play`, () => {
      this.setState({
        isPlay: true,
      });

      this._timer = setInterval(this._changePlayBackTime, 1000);

    });

    this._videoRef.current.addEventListener(`pause`, () => {
      this.setState({
        isPlay: false,
      });

      clearInterval(this._timer);

    });
  }

  _setStateFullScreenVideo() {
    document.addEventListener(`fullscreenchange`, () => {
      if (document.fullscreenElement) {
        this.setState({
          isFullscreen: true,
        });
      } else {
        this.setState({
          isFullscreen: false,
        });
      }
    });
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

VideoPlayer.propTypes = {
  posterImage: string.isRequired,
  video: string.isRequired,
};

export default VideoPlayer;
