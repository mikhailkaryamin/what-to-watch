import * as React from 'react';
import {Subtract} from 'utility-types';

interface State {
  rating: number;
  comment: string;
}

interface InjectingProps {
  isDisabledSubmitButton: boolean;
  onChange: (arg0: {}) => void;
  onSubmit: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const withComment = (Component) => {
  type S = React.ComponentProps<typeof Component>;
  type T = Subtract<S, InjectingProps>;

  class WithComment extends React.PureComponent<T, State> {
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

    _handleFormSubmit(evt: React.MouseEvent<HTMLButtonElement>) {
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

  return WithComment;
};

export default withComment;
