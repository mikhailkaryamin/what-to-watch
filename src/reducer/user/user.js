import {extend} from '../../utils/utils.js';
import {AuthStatus} from '../../const.js';
import User from '../../models/user.js';

const RESPONSE_STATUS_OK = 200;

const DEFAULT_USER = {
  id: -1,
  email: ``,
  name: ``,
  avatarUrl: ``,
};

const initialState = {
  authStatus: null,
  user: DEFAULT_USER,
};

const ActionType = {
  CHECK_AUTHORIZATION: `CHECK_AUTHORIZATION`,
  SET_USER: `SET_USER`,
};

const ActionCreator = {
  checkAuthorization: (status) => {
    return {
      type: ActionType.CHECK_AUTHORIZATION,
      payload: status,
    };
  },

  signIn: (user) => {
    return {
      type: ActionType.SET_USER,
      payload: user,
    };
  }
};

const onUserSignInSuccess = (response, dispatch) => {
  const user = User.parseUser(response.data);

  dispatch(ActionCreator.checkAuthorization(AuthStatus.AUTH));
  dispatch(ActionCreator.signIn(user));
};

const Operation = {
  checkAuthorization: () => (dispatch, getState, api) => {
    const URL = `/login`;

    return api.get(URL)
      .then((response) => {
        onUserSignInSuccess(response, dispatch);
      })
      .catch((err) => {
        dispatch(ActionCreator.checkAuthorization(AuthStatus.NO_AUTH));
        throw err;
      });
  },

  signIn: (authData) => (dispatch, getState, api) => {
    const URL = `/login`;

    return api.post(URL, {
      email: authData.email,
      password: authData.password,
    })
      .then((response) => {
        const responseStatus = response.status;

        if (responseStatus === RESPONSE_STATUS_OK) {
          onUserSignInSuccess(response, dispatch);
        }
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHECK_AUTHORIZATION:
      return extend(state, {
        authStatus: action.payload,
      });

    case ActionType.SET_USER:
      return extend(state, {
        user: action.payload,
      });
  }

  return state;
};

export {
  AuthStatus,
  ActionType,
  ActionCreator,
  DEFAULT_USER,
  Operation,
  reducer,
};
