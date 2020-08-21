import React, {
  PureComponent
} from 'react';
import {func} from 'prop-types';

const withAuthorization = (Component) => {
  class WithAuthorization extends PureComponent {
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
          {...this.props}
          isDisabledSubmitButton={this._checkUserData()}
          onChange={this._handleInputChange}
          onSubmit={this._handleFormSubmit}
        />
      );
    }

    _checkUserData() {
      if (this.state.email && this.state.password) {
        return false;
      }
      return true;
    }

    _handleInputChange(data) {

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

    _handleFormSubmit(evt) {
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

  WithAuthorization.propTypes = {
    signIn: func.isRequired,
  };

  return WithAuthorization;
};

export default withAuthorization;
