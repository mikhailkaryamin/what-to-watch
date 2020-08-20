const AppRoute = {
  ADD_COMMENT: `/films/:id/review`,
  FILM: `/films/:id`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player/:id`,
  NOT_FOUND: `*`,
  ROOT: `/`,
};

const AuthStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const ButtonType = {
  ADD_REVIEW: `ADD_REVIEW`,
  PLAY: `play`,
  LIST: `list`,
};

const EscKeyName = {
  LONG: `Escape`,
  SHORT: `Esc`,
};

const FilmCardsListType = {
  FAVORITES: `favorites`,
  MAIN: `main`,
  LIKE_THIS: `like-this`,
};

const FilmDetailedTabsType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const FavoriteButtonPlace = {
  DETAILED: `DETAILED`,
  MAIN: `MAIN`,
};

const NoAvailableMessage = {
  ERROR_SERVER: `Sorry, server not available. Please, check your connection to internet`,
  FILMS: `Sorry, no available films...`,
  PAGE: `Sorry, page not found...`,
};

const SpaceKeyName = {
  CODE: 32,
  TEXT: `Space`,
};

const StatusRequestServer = {
  FAIL: `fail`,
  SUCCESS: `success`,
};

export {
  AppRoute,
  AuthStatus,
  ButtonType,
  EscKeyName,
  FavoriteButtonPlace,
  FilmCardsListType,
  FilmDetailedTabsType,
  NoAvailableMessage,
  SpaceKeyName,
  StatusRequestServer
};
