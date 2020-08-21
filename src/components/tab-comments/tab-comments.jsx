import React from 'react';
import {connect} from 'react-redux';
import {arrayOf} from 'prop-types';

import {commentPropTypes} from '../../types.js';
import {getComments} from '../../reducer/comment/selectors.js';

const getDateCommentFormat = (date) => {
  const FORMAT_DATE = {
    year: `numeric`,
    day: `numeric`,
    month: `long`,
  };

  const dateComment = new Date(date);

  return dateComment.toLocaleString(`en-US`, FORMAT_DATE);
};

const getMarkupComment = (comment) => {
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
          <time className="review__date" dateTime={new Date(comment.date)}>
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

const TabComments = (props) => {
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

TabComments.propTypes = {
  comments: arrayOf(commentPropTypes)
};

const mapStateToProps = (state) => ({
  comments: getComments(state),
});

export {
  TabComments
};

export default connect(mapStateToProps)(TabComments);
