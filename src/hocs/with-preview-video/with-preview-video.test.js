import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withPreviewVideo from './with-preview-video.tsx';

configure({
  adapter: new Adapter()
});

describe(`with preview video HOC`, () => {
  const MockComponent = () => <div />;
  const MockComponentWrapped = withPreviewVideo(MockComponent);

  test(`onStopPreviewClick should to be isPlayVideo false`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    wrapper.setState({isPlayVideo: true});

    wrapper.props().onStopPreviewClick();
    expect(wrapper.props().isPlayVideo).toBe(false);
  });

  test(`onMouseEnter should to be isPlayVideo true`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    jest.useFakeTimers();
    wrapper.props().onMouseEnter();
    jest.advanceTimersByTime(1200);

    expect(wrapper.props().isPlayVideo).toBe(true);
  });

  test(`onMouseLeave should to be isPlayVideo false`, () => {
    const wrapper = shallow(
        <MockComponentWrapped />
    );

    wrapper.setState({isPlayVideo: true});

    wrapper.props().onMouseLeave();

    expect(wrapper.props().isPlayVideo).toBe(false);
  });
});
