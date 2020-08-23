import * as React from 'react';
import {
  Redirect,
  Route,
} from 'react-router-dom';

import {AppRoute} from '../../const';

type Props = {
  exact: boolean,
  isAuth: boolean,
  path: string,
  render: Function,
}

const Private = (props: Props) => {
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

export default Private;
