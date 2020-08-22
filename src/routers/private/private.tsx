import * as React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import {
  bool,
  string,
  func
} from 'prop-types';

import {AppRoute} from '../../const';

const Private = (props) => {
  const {
    exact,
    isAuth,
    path,
    render,
  } = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={(routeProps) => {
        return (
          isAuth
            ? render(routeProps)
            : <Redirect to={{
              pathname: AppRoute.LOGIN,
              state: {
                from: routeProps.location
              }
            }}
            />
        );
      }}
    />
  );
};

Private.propTypes = {
  exact: bool.isRequired,
  isAuth: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
};

export default Private;
