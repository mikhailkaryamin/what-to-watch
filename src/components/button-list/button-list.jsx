import React from 'react';

const ButtonList = () => {
  return (
    <button
      className={`btn movie-card__button btn--list`}
      type="button"
    >
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>
        My list
      </span>
    </button>
  );
};

export default ButtonList;
