import {combineReducers} from 'redux';
import {reducer as comment} from './comment/comment.js';
import {reducer as currentState} from './current-state/current-state.js';
import {reducer as films} from './films/films.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.COMMENT]: comment,
  [NameSpace.CURRENT_STATE]: currentState,
  [NameSpace.FILMS]: films,
});
