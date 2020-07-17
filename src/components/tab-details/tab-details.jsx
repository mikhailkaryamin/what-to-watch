import React, {
  PureComponent
} from 'react';
import {
  arrayOf,
  number,
  string,
} from 'prop-types';

class TabDetails extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      director,
      genre,
      released,
    } = this.props;
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
            {this._getStarringMarkup()}
          </span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">
            {this._getFormattedRunTime()}
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
  }

  _getFormattedRunTime() {
    let hours = null;
    let minutes = null;

    hours = Math.floor(this.props.runTime / 60);
    minutes = this.props.runTime % 60;

    const hourFormat = (hours >= 1) ? `${hours}${`h`}` : ``;
    const minuteFormat = (minutes) ? `${minutes}${`m`}` : ``;
    return (
      `${hourFormat} ${minuteFormat}`
    );
  }

  _getStarringMarkup() {
    return this.props.starring.map((star, i) =>
      <React.Fragment key={`${star}` + i}>
        {star}{(i < this.props.starring.length - 1) ? `, ` : ``} <br/>
      </React.Fragment>
    );
  }
}

TabDetails.propTypes = {
  director: string,
  genre: string,
  released: number,
  runTime: number,
  starring: arrayOf(string),
};

export default TabDetails;
