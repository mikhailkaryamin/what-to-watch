import * as React from 'react';
import {Diff} from 'utility-types';

import {FilmType} from '../../types';

import {FilmDetailedTabsType} from '../../const';

interface InjectingProps {
  currentTypeTab: string,
  onTabClick: (type: string) => void,
}

const withToggleFilmInfo = <BaseProps extends InjectingProps>(
  Component: React.ComponentType<BaseProps>
) => {

  type HocProps = Diff<BaseProps, InjectingProps> & {
    film: FilmType;
  };

  type HocState = {
    currentTypeTab: string,
  }

  class WithToggleFilmInfo extends React.PureComponent<HocProps, HocState> {
    constructor(props: HocProps) {
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
          currentTypeTab={currentTypeTab}
          onTabClick={this._handleTabTypeChange}
          {...(this.props as any)}
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
