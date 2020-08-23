import * as React from 'react';
import {Diff} from 'utility-types';

interface InjectingProps {
  isPlayVideo: boolean;
  onStopPreviewClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const withPreviewVideo = <BaseProps extends InjectingProps>(
  Component: React.ComponentType<BaseProps>
) => {
  
  type HocProps = Diff<BaseProps, InjectingProps>;
  
  type HocState = {
    isPlayVideo: boolean;
  }


  class WithPreviewVideo extends React.PureComponent<HocProps, HocState> {
    private _timer: ReturnType<typeof setTimeout> | null ;

    constructor(props: HocProps) {
      super(props);
      this.state = {
        isPlayVideo: false,
      };
      this._handleMouseClick = this._handleMouseClick.bind(this);
      this._handleMouseEnter = this._handleMouseEnter.bind(this);
      this._handleMouseLeave = this._handleMouseLeave.bind(this);
      this._timer = null;
      this._setPlayVideo = this._setPlayVideo.bind(this);
    }

    componentWillUnmount() {
      if (this._timer) {
        clearTimeout(this._timer);
      }
    }

    render() {
      const {
        isPlayVideo
      } = this.state;

      return (
        <Component
          isPlayVideo={isPlayVideo}
          onStopPreviewClick={this._handleMouseClick}
          onMouseEnter={this._handleMouseEnter}
          onMouseLeave={this._handleMouseLeave}
          {...(this.props as any)}
        />
      );
    }

    _handleMouseClick() {
      this.setState({
        isPlayVideo: false,
      });
    }

    _handleMouseEnter() {
      const controlPlayPreview = () => {
        this._setPlayVideo();
      };

      this._timer = setTimeout(controlPlayPreview, 1000);
    }

    _handleMouseLeave() {
      if (this._timer && !this.state.isPlayVideo) {
        clearTimeout(this._timer);
      } else {
        this._setPlayVideo();
        clearTimeout(this._timer);
      }
    }

    _setPlayVideo() {
      this.setState((state) => ({
        isPlayVideo: !state.isPlayVideo
      }));
    }
  }

  return WithPreviewVideo;
};

export default withPreviewVideo;
