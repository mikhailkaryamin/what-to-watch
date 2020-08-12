import React from 'react';
import {Link} from 'react-router-dom';

import {
  bool,
  string,
} from 'prop-types';

import {AppRoute} from '../../const.js';

const getLogoMarkup = () => {
  return (
    <React.Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </React.Fragment>
  );
};

const Logotype = (props) => {
  const {
    isLink,
    modificatorClass,
  } = props;

  return (
    <div className="logo">
      {isLink &&
        <Link
          className={`logo__link ${modificatorClass ? modificatorClass : ``}`}
          to={AppRoute.ROOT}
        >
          {getLogoMarkup()}
        </Link>
      }

      {isLink ||
        <a className={`logo__link ${modificatorClass ? modificatorClass : ``}`}>
          {getLogoMarkup()}
        </a>
      }
    </div>
  );
};

Logotype.propTypes = {
  isLink: bool.isRequired,
  modificatorClass: string,
};

export default Logotype;
