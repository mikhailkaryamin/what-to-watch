import React from 'react';
import {Link} from 'react-router-dom';
import {number} from 'prop-types';

const ButtonAddComment = (props) => {
  const {
    id
  } = props;

  return (
    <Link
      className="btn movie-card__button"
      to={`/films/${id}/review`}
    >
      Add review
    </Link>
  );
};

ButtonAddComment.propTypes = {
  id: number.isRequired,
};

export default ButtonAddComment;
