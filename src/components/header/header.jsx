import React from 'react';
import {string} from 'prop-types';

import Logotype from '../logotype/logotype.jsx';

const Header = (props) => {
  const {
    backgroundImage,
  } = props;

  return (
    <React.Fragment>
      <div className="movie-card__bg">
        <img src={backgroundImage} alt="The Grand Budapest Hotel" />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <Logotype />

        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

Header.propTypes = {
  backgroundImage: string,
};

export default Header;
