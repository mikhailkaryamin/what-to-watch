import React from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';

import {setAmountRenderFilmCard} from '../../actions/actions.js';

const ShowMoreButton = (props) => {
  const {
    onShowMoreButtonClick,
  } = props;

  return (
    <div className="catalog__more">
      <button
        className="catalog__button"
        type="button"
        onClick={() => {
          onShowMoreButtonClick();
        }}
      >
        Show more
      </button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  onShowMoreButtonClick: func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onShowMoreButtonClick() {
    dispatch(setAmountRenderFilmCard());
  }
});

export {
  ShowMoreButton,
};

export default connect(null, mapDispatchToProps)(ShowMoreButton);

