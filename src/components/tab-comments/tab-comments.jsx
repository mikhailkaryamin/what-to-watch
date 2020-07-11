import React, {
  PureComponent
} from 'react';
import {arrayOf} from 'prop-types';

import {filmCommentPropTypes} from '../../types.js';

class TabComments extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      filmComments,
    } = this.props;

    return (
      <div className="movie-card__reviews movie-card__row">
        <div className="movie-card__reviews-col">

          {filmComments.filter((el, i) => (i + 1) % 2).map((comment) =>
            this._getMarkupComment(comment)
          )}

        </div>

        <div className="movie-card__reviews-col">

          {filmComments.filter((el, i) => !((i + 1) % 2)).map((comment) =>
            this._getMarkupComment(comment)
          )}

        </div>
      </div>
    );
  }

  _getDateComment(date) {
    const FORMAT_DATE = {
      year: `numeric`,
      day: `numeric`,
      month: `long`,
    };

    const dateComment = new Date(date);

    return dateComment.toLocaleString(`en-US`, FORMAT_DATE);
  }

  _getMarkupComment(comment) {
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
              {this._getDateComment(comment.date)}
            </time>
          </footer>
        </blockquote>

        <div className="review__rating">
          {comment.rating}
        </div>
      </div>
    );
  }
}

TabComments.propTypes = {
  filmComments: arrayOf(filmCommentPropTypes)
};

export default TabComments;
