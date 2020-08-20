import React from 'react';
import ReactDOM from 'react-dom';
import {
  applyMiddleware,
  createStore,
} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

import reducer from './reducer/reducer.js';
import {
  Operation as FilmOperation,
  ActionCreator as ActionFilms
} from './reducer/films/films.js';
import {
  ActionCreator as UserAction,
  AuthStatus,
  Operation as UserOperation,
} from './reducer/user/user.js';

import {createAPI} from './api.js';

import {StatusRequestServer} from './const.js';

import App from './components/app/app.jsx';

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
