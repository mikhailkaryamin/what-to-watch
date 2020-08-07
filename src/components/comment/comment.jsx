import React from 'react';

const STARS_RATING = [1, 2, 3, 4, 5];

const getMarkupStar = (number) => {
  return (
    <React.Fragment key={number}>
      <input className="rating__input" id={`star-${number}`} type="radio" name="rating" value={number} />
      <label className="rating__label" htmlFor={`star-${number}`}>
        Rating {number}
      </label>
    </React.Fragment>
  );
};

const Comment = () => {
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {STARS_RATING.map((el) => {
              return getMarkupStar(el);
            })}
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text"></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default Comment;
