import React, {
  PureComponent
} from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import {arrayOf} from 'prop-types';

import {
  filmCardPropTypes,
  filmCommentPropTypes,
} from '../../types.js';
import {FilmCardsListType} from '../../const.js';

import Main from '../main/main.jsx';
import FilmDetailed from '../film-detailed/film-detailed.jsx';

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
            <FilmDetailed
              filmCard={this.props.filmCards[0]}
              filmCards={this.props.filmCards}
              filmComments={this.props.filmComments}
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
      filmCards,
      filmComments,
    } = this.props;

    if (this.state.activeCard) {
      return (
        <FilmDetailed
          filmCard={this.state.activeCard}
          filmCards={filmCards}
          filmComments={filmComments}
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
  filmComments: arrayOf(
      filmCommentPropTypes
  )
};

export default App;
