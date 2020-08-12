const AppRoute = {
  ADD_COMMENT: `/films/:id/review`,
  FILM: `/films/:id`,
  LOGIN: `/login`,
  MY_LIST: `/mylist`,
  PLAYER: `/player/:id`,
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
  MAIN: `main`,
  LIKE_THIS: `like-this`,
};

const FilmDetailedTabsType = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

const SpaceKeyName = {
  CODE: 32,
  TEXT: `Space`,
};

export {
  AppRoute,
  AuthStatus,
  ButtonType,
  EscKeyName,
  FilmCardsListType,
  FilmDetailedTabsType,
  SpaceKeyName,
};
