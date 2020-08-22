import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {UserType} from '../../types'

import {AppRoute} from '../../const';

import {getUser} from '../../reducer/user/selectors';

type Props = {
  user: UserType
}

const ButtonUser: React.FC<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  user: getUser(state),
});

export {ButtonUser};

export default connect(mapStateToProps)(ButtonUser);
