import * as React from 'react';
import {Subtract} from 'utility-types';

import {FilmDetailedTabsType} from '../../const';

interface State {
  currentTypeTab: string,
}

interface InjectingProps {
  currentTypeTab: string,
  onTabClick: (arg0: string) => void,
}

const withToggleFilmInfo = (Component) => {
  type S = React.ComponentProps<typeof Component>;
  type T = Subtract<S, InjectingProps>;

  class WithToggleFilmInfo extends React.PureComponent<T, State> {
    constructor(props) {
      super(props);

      this.state = {
        currentTypeTab: FilmDetailedTabsType.OVERVIEW,
      };
      this._handleTabTypeChange = this._handleTabTypeChange.bind(this);
    }

    render() {
      const {
        currentTypeTab
      } = this.state;

      return (
        <Component
          {...this.props}
          currentTypeTab={currentTypeTab}
          onTabClick={this._handleTabTypeChange}
        />
      );
    }

    _handleTabTypeChange(type: string) {
      this.setState({
        currentTypeTab: type,
      });
    }
  }

  return WithToggleFilmInfo;
};

export default withToggleFilmInfo;
