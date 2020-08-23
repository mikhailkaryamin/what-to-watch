import * as React from 'react';
import {Diff} from 'utility-types';

import {
  DataInputSignInType,
  UserRAWType,
} from '../../types';

interface InjectingProps {
  isDisabledSubmitButton: boolean;
  onChange: (data: DataInputSignInType) => void;
  onSubmit: (evt: React.FormEvent<HTMLFormElement>) => void;
}

const withAuthorization = <BaseProps extends InjectingProps>(
  Component: React.ComponentType<BaseProps>
) => {

  type HocProps = Diff<BaseProps, InjectingProps> & {
    signIn: (userData: UserRAWType) => void;
  };

  type HocState = {
    email: string;
    password: string;
  }

  class WithAuthorization extends React.PureComponent<HocProps, HocState> {
    constructor(props: HocProps) {
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

    _handleInputChange(data: DataInputSignInType) {

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

    _handleFormSubmit(evt: React.FormEvent<HTMLFormElement>) {
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
