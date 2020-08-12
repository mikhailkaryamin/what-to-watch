import React, {
  PureComponent
} from 'react';

import {FilmDetailedTabsType} from '../../const.js';

const withToggleFilmInfo = (Component) => {
  class WithToggleFilmInfo extends PureComponent {
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

    _handleTabTypeChange(type) {
      this.setState({
        currentTypeTab: type,
      });
    }
  }

  return WithToggleFilmInfo;
};

export default withToggleFilmInfo;
