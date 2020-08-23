import * as React from 'react';
import {connect} from 'react-redux';

import {CommentType} from '../../types';
import {getComments} from '../../reducer/comment/selectors';

type Props = {
  comments: CommentType[],
}

const getDateCommentFormat = (date: number) => {
  const FORMAT_DATE = {
    year: `numeric`,
    day: `numeric`,
    month: `long`,
  };

  const dateComment = new Date(date);

  return dateComment.toLocaleString(`en-US`, FORMAT_DATE);
};

const getMarkupComment = (comment: CommentType) => {
  return (
    <div
      key={`${comment.id}-review`}
      className="review"
    >
      <blockquote className="review__quote">
        <p className="review__text">
          {comment.text}
        </p>

        <footer className="review__details">
          <cite className="review__author">
            {comment.user.name}
          </cite>
          <time className="review__date" dateTime={new Date(comment.date).toISOString()}>
            {getDateCommentFormat(comment.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">
        {comment.rating}
      </div>
    </div>
  );
};

const TabComments: React.FC<Props> = (props: Props) => {
  const {
    comments,
  } = props;

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">

        {comments.filter((el, i) => (i + 1) % 2).map((comment) =>
          getMarkupComment(comment)
        )}

      </div>

      <div className="movie-card__reviews-col">

        {comments.filter((el, i) => !((i + 1) % 2)).map((comment) =>
          getMarkupComment(comment)
        )}

      </div>
    </div>
  );
};

const mapStateToProps = (state: {}) => ({
  comments: getComments(state),
});

export {TabComments};

export default connect(mapStateToProps)(TabComments);
