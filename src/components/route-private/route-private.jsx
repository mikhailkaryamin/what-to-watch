import React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';
import {
  bool,
  string,
  func
} from 'prop-types';

import {AppRoute} from '../../const.js';

const RoutePrivate = (props) => {
  const {
    isAuth,
    path,
    render,
  } = props;

  return (
    <Route
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

RoutePrivate.propTypes = {
  isAuth: bool.isRequired,
  path: string.isRequired,
  render: func.isRequired,
};

export default RoutePrivate;
