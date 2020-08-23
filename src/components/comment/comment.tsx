import * as React from 'react';
import {Redirect} from 'react-router-dom';

import {StatusRequestServer} from '../../const';

type Props = {
  filmId: number,
  isDisabledSubmitButton: boolean,
  onChange: (arg0: {}) => void,
  onSubmit: () => void,
  statusUploadComment: string | null,
}

const STARS_RATING = [1, 2, 3, 4, 5];

const getMarkupStar = (starNumber: number, onChange: ({type, value}) => void) => {
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

const Comment: React.FC<Props> = (props: Props) => {
  const {
    filmId,
    isDisabledSubmitButton,
    onChange,
    onSubmit,
    statusUploadComment,
  } = props;

  const isSuccessUpload = statusUploadComment === StatusRequestServer.SUCCESS;

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
                disabled={isDisabledSubmitButton}
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

export default Comment;