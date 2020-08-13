import React from 'react';
import {Redirect} from 'react-router-dom';

import {
  bool,
  func,
  oneOf,
  oneOfType,
  string,
  number,
} from 'prop-types';

import {StatusUploadComment} from '../../const.js';

const STARS_RATING = [1, 2, 3, 4, 5];

const getMarkupStar = (starNumber, onChange) => {
  return (
    <React.Fragment key={starNumber}>
      <input
        className="rating__input"
        id={`star-${starNumber}`}
        onChange={(evt) => onChange({
          type: `rating`,
          value: evt.target.value,
        })}
        name="rating"
        type="radio"
        value={starNumber}
      />
      <label className="rating__label" htmlFor={`star-${starNumber}`}>
        Rating {starNumber}
      </label>
    </React.Fragment>
  );
};

const Comment = (props) => {
  const {
    filmId,
    isDisabledForm,
    onChange,
    onSubmit,
    statusUploadComment,
  } = props;

  const isSuccessUpload = statusUploadComment === StatusUploadComment.SUCCESS;

  return (
    isSuccessUpload
      ? <Redirect to={`/films/${filmId}`} />
      : <div className="add-review">
        <form
          action="#"
          className="add-review__form"
          onSubmit={onSubmit}
        >
          <div className="rating">
            <div className="rating__stars">
              {STARS_RATING.map((starNumber) => {
                return getMarkupStar(starNumber, onChange);
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              onChange={(evt) => onChange({
                type: `comment`,
                value: evt.target.value,
              })}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                disabled={isDisabledForm}
                type="submit"
              >
                Post
              </button>
            </div>

          </div>
        </form>
      </div>
  );
};

Comment.propTypes = {
  filmId: number.isRequired,
  isDisabledForm: bool.isRequired,
  onChange: func.isRequired,
  onSubmit: func.isRequired,
  statusUploadComment: oneOfType([
    string.isRequired,
    oneOf([null]).isRequired,
  ]),
};

export default Comment;
