import * as React from 'react';
import {Diff} from 'utility-types';

import {UserRAWType} from '../../types';

interface InjectingProps {
  isDisabledSubmitButton: boolean;
  onChange: (arg0: {}) => void;
  onSubmit: () => void;
}

const withAuthorization = <BaseProps extends InjectingProps>(
  Component: React.ComponentType<BaseProps>
) => {

  type HocProps = Diff<BaseProps, InjectingProps> & {
    signIn: (arg0: UserRAWType) => void;
  };

  type HocState = {
    email: string;
    password: string;
  }

  class WithAuthorization extends React.PureComponent<HocProps, HocState> {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        password: ``,
      };

      this._checkUserData = this._checkUserData.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
    }

    render() {
      return (
        <Component
          isDisabledSubmitButton={this._checkUserData()}
          onChange={this._handleInputChange}
          onSubmit={this._handleFormSubmit}
          {...(this.props as any)}
        />
      );
    }

    _checkUserData() {
      if (this.state.email && this.state.password) {
        return false;
      }
      return true;
    }

    _handleInputChange(
      data: {
        type: string,
        value: string
      }) {

      if (data.type === `email`) {
        this.setState({
          email: data.value,
        });
      }

      if (data.type === `password`) {
        this.setState({
          password: data.value,
        });
      }
    }

    _handleFormSubmit(evt: React.MouseEvent<HTMLButtonElement>) {
      const {
        signIn
      } = this.props;

      evt.preventDefault();
      const userData = {
        email: this.state.email,
        password: this.state.password,
      };

      signIn(userData);
    }
  }

  return WithAuthorization;
};

export default withAuthorization;
