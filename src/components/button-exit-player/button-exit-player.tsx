import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const';
import {ActionCreator as ActionOptions} from '../../reducer/options/options';

type Props = {
  onButtonExitClick: () => void,
}

const ButtonExitPlayer: React.FC<Props> = (props: Props) => {
  const {onButtonExitClick} = props;

  return (
    <Link
      to={AppRoute.ROOT}
    >
      <button
        type="button"
        className="player__exit"
        onClick={() => {
          onButtonExitClick();
        }}
      >
        Exit
      </button>
    </Link>

  );
};

const mapDispatchToProps = (dispatch) => ({
  onButtonExitClick() {
    dispatch(ActionOptions.resetFilm());
  }
});

export {
  ButtonExitPlayer,
};

export default connect(null, mapDispatchToProps)(ButtonExitPlayer);
