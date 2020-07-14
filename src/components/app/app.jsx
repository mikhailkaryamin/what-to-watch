import React, {
  PureComponent
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';

import {
  filmPropTypes,
} from '../../types.js';
import {FilmCardsListType} from '../../const.js';

import Main from '../main/main.jsx';
import FilmDetailed from '../film-detailed/film-detailed.jsx';
import withToggleFilmInfo from '../../hocs/with-toggle-film-info/with-toggle-film-info.jsx';

const FilmDetailedWrapped = withToggleFilmInfo(FilmDetailed);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
          >
            {this._renderApp()}
          </Route>
          <Route
            path="/dev-component"
          >
            <FilmDetailedWrapped
              sign={FilmCardsListType.LIKE_THIS}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      currentFilm,
    } = this.props;

    if (currentFilm) {
      return (
        <FilmDetailedWrapped
          sign={FilmCardsListType.LIKE_THIS}
        />
      );
    } else {
      return (
        <Main />
      );
    }
  }
}

App.propTypes = {
  currentFilm: filmPropTypes,
};

const mapStateToProps = (state) => ({
  currentFilm: state.currentFilm,
});

export {
  App,
};

export default connect(mapStateToProps)(App);
