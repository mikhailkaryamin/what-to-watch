import * as React from 'react';
import {connect} from 'react-redux';

import {ActionCreator as ActionOptions} from '../../reducer/options/options';

type Props = {
  onShowMoreButtonClick: () => void;
}

const ShowMoreButton: React.FC<Props> = (props: Props) => {
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

const mapDispatchToProps = (dispatch: Function) => ({
  onShowMoreButtonClick() {
    dispatch(ActionOptions.setAmountRenderFilmCard());
  }
});

export {ShowMoreButton};

export default connect(null, mapDispatchToProps)(ShowMoreButton);

