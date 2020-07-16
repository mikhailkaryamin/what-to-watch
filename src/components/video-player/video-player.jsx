import React, {
  PureComponent,
} from 'react';

import {
  bool,
  func,
  node,
  number,
  string,
} from 'prop-types';

import ButtonExitPlayer from '../button-exit-player/button-exit-player.jsx';

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {

    const {
      children,
      isPlay,
      progress,
      playBackTime,
      onPlayButtonClick,
      onFullScreenButtonClick,
    } = this.props;

    return (
      <div className="player">
        {children}

        <ButtonExitPlayer />

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max="100"></progress>
              <div className="player__toggler" style={{left: progress + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">
              {playBackTime}
            </div>
          </div>

          <div className="player__controls-row">
            <button
              type="button"
              className="player__play"
              onClick={() => {
                onPlayButtonClick();
              }}
            >

              {this._setIconPlay(isPlay)}

            </button>

            <div className="player__name">Transpotting</div>

            <button
              type="button"
              className="player__full-screen"
              onClick={() => {
                onFullScreenButtonClick();
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
}

VideoPlayer.propTypes = {
  children: node.isRequired,
  isPlay: bool.isRequired,
  progress: number.isRequired,
  playBackTime: string.isRequired,
  onPlayButtonClick: func.isRequired,
  onFullScreenButtonClick: func.isRequired,
};

export default VideoPlayer;
