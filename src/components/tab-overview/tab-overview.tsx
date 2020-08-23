import * as React from 'react';

type Props = {
  description: string;
  director: string;
  rating: number;
  scoreCount: number;
  starring: string[];
}

const LevelRating = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10,
};

const getFilmRatingLevel = (rating: number) =>{
  let ratingLevel = ``;

  switch (true) {
    case (rating >= LevelRating.AWESOME):
      ratingLevel = `Awesome`;
      break;
    case (rating >= LevelRating.VERY_GOOD):
      ratingLevel = `Very good`;
      break;
    case (rating >= LevelRating.GOOD):
      ratingLevel = `Good`;
      break;
    case (rating >= LevelRating.NORMAL):
      ratingLevel = `Normal`;
      break;
    case (rating >= LevelRating.BAD):
      ratingLevel = `Bad`;
      break;
  }

  return ratingLevel;
};

const TabOverview: React.FC<Props> = (props: Props) => {
  const {
    description,
    director,
    rating,
    scoreCount,
    starring,
  } = props;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">
          {rating}
        </div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">
            {getFilmRatingLevel(rating)}
          </span>
          <span className="movie-rating__count">
            {scoreCount} ratings
          </span>
        </p>
      </div>

      <div className="movie-card__text">
        {description}

        <p className="movie-card__director">
          <strong>
            Director: {director}
          </strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            Starring: {starring}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

export default TabOverview;
