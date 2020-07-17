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
import App from './components/app/app.jsx';
import {createAPI} from './api.js';
import {Operation as FilmOperation} from './reducer/films/films.js';
import {Operation as CommentOperation} from './reducer/comment/comment.js';

const api = createAPI();

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(FilmOperation.loadFilms());
store.dispatch(FilmOperation.loadPromoFilm());
store.dispatch(CommentOperation.loadComments());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
