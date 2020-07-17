import React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withVideoPlayer from './with-video-player.jsx';

configure({
  adapter: new Adapter()
});

describe(`with video player HOC`, () => {
  const POSTER_IMAGE = `some/src`;
  const VIDEO = `some/src`;

  const MockComponent = () => <div />;
  const MockComponentWrapped = withVideoPlayer(MockComponent);


  const wrapper = shallow(
      <MockComponentWrapped
        video={VIDEO}
        posterImage={POSTER_IMAGE}
      />, {
        disableLifecycleMethods: true
      }
  );

  const mockRef = document.createElement(`video`);

  mockRef.play = () => {
    wrapper.setState({isPlay: true});
  };
  mockRef.pause = () => {
    wrapper.setState({isPlay: false});
  };

  wrapper.instance()._videoRef.current = mockRef;
  wrapper.instance().componentDidMount();

  test(`use prop onPlayButtonClick should change prop isPlay=false => isPlay=true`, () => {
    wrapper.props().onPlayButtonClick();

    expect(wrapper.props().isPlay).toBe(true);
  });

  test(`use prop onPlayButtonClick should change prop isPlay=true => isPlay=false`, () => {
    wrapper.props().onPlayButtonClick();

    expect(wrapper.props().isPlay).toBe(false);
  });
});
