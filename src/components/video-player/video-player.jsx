import React, {
  createRef,
  PureComponent,
} from 'react';

const DEFAULT_PLAYBACK_TIME = `00:00:00`;

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      playBackTime: DEFAULT_PLAYBACK_TIME,
      progress: 0,
    };
    this._changePlayBackTime = this._changePlayBackTime.bind(this);
    this._handleSpaceButtonDown = this._handleSpaceButtonDown.bind(this);
    this._playButtonEl = null;
    this._playVideo = this._playVideo.bind(this);
    this._timer = null;
    this._toggleFullScreen = this._toggleFullScreen.bind(this);
    this._videoRef = createRef();
  }

  componentDidMount() {
    document.addEventListener(`keydown`, this._handleSpaceButtonDown);
  }

  componentDidUpdate() {
    const duration = this._videoRef.current.duration;
    const playBackTime = this._videoRef.current.currentTime;

    if (duration <= playBackTime) {
      clearInterval(this._timer);
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

    return (
      <div className="player">
        <video
          src="https://upload.wikimedia.org/wikipedia/commons/transcoded/8/87/Schlossbergbahn.webm/Schlossbergbahn.webm.480p.vp9.webm"
          className="player__video"
          poster="img/player-poster.jpg"
          ref={this._videoRef}
        ></video>

        <button type="button" className="player__exit">
          Exit
        </button>

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

  _handleSpaceButtonDown(evt) {
    const isSpaceKey = evt.key === `Space` || evt.keyCode === 32;

    if (isSpaceKey) {  
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

      clearInterval(this._timer);
    } else {
      videoPlayer.play();

      this._changePlayBackTime();
      this._timer = setInterval(this._changePlayBackTime, 1000);
    }

    this.setState((curState) => ({isPlay: !curState.isPlay}));

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

  _toggleFullScreen() {
    const video = this._videoRef.current;

    if (!document.fullscreenElement) {
      video.requestFullscreen().catch((err) => {
        alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  }

}

export default VideoPlayer;
