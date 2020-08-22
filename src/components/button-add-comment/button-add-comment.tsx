import * as React from 'react';
import {Link} from 'react-router-dom';

type Props = {
  id: number,
}

const ButtonAddComment: React.FC<Props> = (props: Props) => {
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

export default ButtonAddComment;
