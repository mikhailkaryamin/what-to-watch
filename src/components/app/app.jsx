import React from 'react';
import Main from '../main/main.jsx';
import {arrayOf} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';

const onHeadlineButtonClick = () => {};

const App = (props) => {
  const {filmCards} = props;
  return <Main
    filmCards={filmCards}
    onHeadlineButtonClick={onHeadlineButtonClick}
  />;
};

App.propTypes = {
  filmCards: arrayOf(
      filmCardPropTypes
  ),
};

export default App;
