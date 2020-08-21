import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {AppRoute} from '../../const.js';

import {getUser} from '../../reducer/user/selectors.js';
import {
  number,
  shape,
  string,
} from 'prop-types';

const ButtonUser = (props) => {
  const {
    user,
  } = props;

  return (
    <Link
      to={AppRoute.MY_LIST}
    >
      <div className="user-block__avatar">
        <img src={`https://htmlacademy-react-3.appspot.com/${user.avatarUrl}`} alt="User avatar" width="63" height="63" />
      </div>
    </Link>
  );
};

ButtonUser.propTypes = {
  user: shape({
    avatarUrl: string.isRequired,
    email: string.isRequired,
    id: number.isRequired,
    name: string.isRequired,
  })
};

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export {ButtonUser};

export default connect(mapStateToProps)(ButtonUser);
