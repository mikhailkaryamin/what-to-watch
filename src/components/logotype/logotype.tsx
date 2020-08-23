import * as React from 'react';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';

type Props = {
  isLink: boolean;
  modificatorClass?: string;
}

const getLogoMarkup = () => {
  return (
    <React.Fragment>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </React.Fragment>
  );
};

const Logotype: React.FC<Props> = (props: Props) => {
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

export default Logotype;
