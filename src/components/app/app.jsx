import React, {
  PureComponent
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import {func, bool, string} from 'prop-types';

import {
  AppRoute,
  AuthStatus,
} from '../../const.js';

import {Operation as UserOperation} from '../../reducer/user/user.js';
import {getAuthStatus} from '../../reducer/user/selectors.js';
import {
  getStatusLoad,
} from '../../reducer/films/selectors.js';

import Main from '../main/main.jsx';
import RouteWithFilm from '../route-with-film/route-with-film.jsx';
import SignIn from '../sign-in/sign-in.jsx';
import withAuthorization from '../../hocs/with-authorization/with-authorization.jsx';

const SignInWrapped = withAuthorization(SignIn);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      authStatus,
      signIn,
      statusLoadFilms,
    } = this.props;

    const isAuth = authStatus === AuthStatus.AUTH;
    const isLoading = statusLoadFilms !== true;

    if (isLoading) {
      return ``;
    }

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path={AppRoute.ROOT}
            render={() => <Main />}
          />
          <Route
            exact
            path={AppRoute.LOGIN}
            render={ () => {
              return (
                <SignInWrapped
                  isAuth={isAuth}
                  signIn={signIn}
                />
              );
            }}
          />
          <RouteWithFilm
            path={AppRoute.PLAYER}
          />
          <RouteWithFilm
            path={AppRoute.FILM}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  authStatus: string.isRequired,
  signIn: func.isRequired,
  statusLoadFilms: bool.isRequired,
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  statusLoadFilms: getStatusLoad(state),
});

const mapDispatchToProps = (dispatch) => ({
  signIn: (user) => {
    dispatch(UserOperation.signIn(user));
  }
});

export {
  App,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
