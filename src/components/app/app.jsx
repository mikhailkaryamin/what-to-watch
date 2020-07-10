import React, {
  PureComponent
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {arrayOf} from 'prop-types';
import {filmCardPropTypes} from '../../types.js';
import {FilmCardsListType} from '../../const.js';

import Main from '../main/main.jsx';
import FilmPage from '../film-page/film-page.jsx';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };
    this._setActiveFilmCard = this._setActiveFilmCard.bind(this);
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
            <FilmPage
              filmCard={this.props.filmCards[0]}
              filmCards={this.props.filmCards}
              onFilmCardClick={this._setActiveFilmCard}
              sign={FilmCardsListType.LIKE_THIS}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }

  _renderApp() {
    const {
      filmCards
    } = this.props;

    if (this.state.activeCard) {
      return (
        <FilmPage
          filmCard={this.state.activeCard}
          filmCards={this.props.filmCards}
          onFilmCardClick={this._setActiveFilmCard}
          sign={FilmCardsListType.LIKE_THIS}
        />
      );
    } else {
      return (
        <Main
          filmCards={filmCards}
          onFilmCardClick={this._setActiveFilmCard}
        />
      );
    }
  }

  _setActiveFilmCard(id) {
    this.setState({
      activeCard: id,
    });
  }
}

App.propTypes = {
  filmCards: arrayOf(
      filmCardPropTypes
  ),
};

export default App;
