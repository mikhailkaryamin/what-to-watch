import React, {
  PureComponent
} from 'react';
import {
  func,
  number
} from 'prop-types';

const withComment = (Component) => {
  class WithComment extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 5,
        comment: ``,
      };

      this._checkComment = this._checkComment.bind(this);
      this._handleFormSubmit = this._handleFormSubmit.bind(this);
      this._handleInputChange = this._handleInputChange.bind(this);
    }

    render() {
      return (
        <Component
          {...this.props}
          isDisabledSubmitButton={this._checkComment()}
          onChange={this._handleInputChange}
          onSubmit={this._handleFormSubmit}
        />
      );
    }

    _checkComment() {
      if (this.state.comment.length >= 50 && this.state.comment.length <= 400) {
        return false;
      }

      return true;
    }

    _handleFormSubmit(evt) {
      const {
        uploadComment,
        filmId,
      } = this.props;

      evt.preventDefault();
      const commentData = {
        rating: this.state.rating,
        comment: this.state.comment,
      };

      uploadComment(commentData, filmId);
    }

    _handleInputChange(data) {
      if (data.type === `comment`) {
        this.setState({
          comment: data.value,
        });
      }

      if (data.type === `rating`) {
        this.setState({
          rating: data.value,
        });
      }
    }

  }

  WithComment.propTypes = {
    uploadComment: func.isRequired,
    filmId: number.isRequired,
  };

  return WithComment;
};

export default withComment;
