import * as React from 'react';
import {Diff} from 'utility-types';

import {CommentRAWType} from '../../types';

type DataInput = {
  type: `comment` | `rating`;
  value: any;
}

interface InjectingProps {
  isDisabledSubmitButton: boolean;
  onChange: (data: DataInput) => void;
  onSubmit: (evt: React.MouseEvent<HTMLButtonElement>) => void;
}

const withComment = <BaseProps extends InjectingProps>(
  Component: React.ComponentType<BaseProps>
) => {

  type HocProps = Diff<BaseProps, InjectingProps> & {
    uploadComment: (commentData: CommentRAWType, filmId: number) => void;
    filmId: number;
  }

  type HocState = {
    rating: number;
    comment: string;
  }

  class WithComment extends React.PureComponent<HocProps, HocState> {
    constructor(props: HocProps) {
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
          isDisabledSubmitButton={this._checkComment()}
          onChange={this._handleInputChange}
          onSubmit={this._handleFormSubmit}
          {...(this.props as any)}
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

    _handleInputChange(data: DataInput) {
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
