import * as React from 'react';

type Props = {
  director: string;
  genre: string;
  released: number;
  runTime: number;
  starring: string[];
}

const getFormattedRunTime = (runTime: number) => {
  let hours = null;
  let minutes = null;

  hours = Math.floor(runTime / 60);
  minutes = runTime % 60;

  const hourFormat = hours >= 1 ? `${hours}${`h`}` : ``;
  const minuteFormat = minutes ? `${minutes}${`m`}` : ``;

  return (
    `${hourFormat} ${minuteFormat}`
  );
};

const getStarsMarkup = (starring: string[]) => {
  return starring.map((star, i) =>
    <React.Fragment key={`${star}` + i}>
      {star}{(i < starring.length - 1) ? `, ` : ``} <br/>
    </React.Fragment>
  );
};

const TabDetails: React.FC<Props> = (props: Props) => {
  const {
    director,
    genre,
    released,
    runTime,
    starring
  } = props;

  return (<div className="movie-card__text movie-card__row">
    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Director</strong>
        <span className="movie-card__details-value">
          {director}
        </span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Starring</strong>
        <span className="movie-card__details-value">
          {getStarsMarkup(starring)}
        </span>
      </p>
    </div>

    <div className="movie-card__text-col">
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Run Time</strong>
        <span className="movie-card__details-value">
          {getFormattedRunTime(runTime)}
        </span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Genre</strong>
        <span className="movie-card__details-value">
          {genre}
        </span>
      </p>
      <p className="movie-card__details-item">
        <strong className="movie-card__details-name">Released</strong>
        <span className="movie-card__details-value">
          {released}
        </span>
      </p>
    </div>
  </div>);
};

export default TabDetails;
