import React from 'react';
import {string} from 'prop-types';

const Logotype = (props) => {
  const {
    modificatorClass,
  } = props;

  return (
    <div className="logo">
      <a className={`logo__link ${modificatorClass ? modificatorClass : ``}`}>
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </a>
    </div>
  );
};

Logotype.propTypes = {
  modificatorClass: string,
};

export default Logotype;
