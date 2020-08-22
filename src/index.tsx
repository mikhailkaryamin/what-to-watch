import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer/reducer';
import {
  Operation as FilmOperation,
  ActionCreator as ActionFilms
} from './reducer/films/films';
import {
  ActionCreator as UserAction,
  AuthStatus,
  Operation as UserOperation,
} from './reducer/user/user';

import {createAPI} from './api';

import {StatusRequestServer} from './const';

import App from './components/app/app';

const onUnauthorized = () => {
  store.dispatch(UserAction.checkAuthorization(AuthStatus.NO_AUTH));
};

const onErrorNetwork = () => {
  store.dispatch(ActionFilms.setStatusLoadFilms(StatusRequestServer.FAIL));
};

const api = createAPI(onUnauthorized, onErrorNetwork);

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(FilmOperation.loadFilms());
store.dispatch(FilmOperation.loadPromoFilm());
store.dispatch(UserOperation.checkAuthorization());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
