type CommentRAWType = {
  rating: number;
  comment: string;
}

type CommentType ={
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  text: string;
  date: number;
};

type DataInputCommentType = {
  type: `comment` | `rating`;
  value: any;
}

type DataInputSignInType = {
  type: `email` | `password`;
  value: any;
}

type FilmType = {
  backgroundImage: string;
  description: string;
  director: string;
  genre: string;
  isFavorite: boolean;
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  previewVideoLink: string;
  rating: number;
  released: number;
  runTime: number;
  scoreCount: number;
  starring: string[];
  video: string;
};

type UserType = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
}

type UserRAWType = {
  email: string;
  password: string;
}

type RootState = {
  COMMENT: {
    comments: [];
    statusUploadComment: null | string;
  };
  OPTIONS: {
    amountRenderFilmCard: number;
    genre: string;
    film: FilmType | null;
  };
  FAVORITE: {
    favoriteFilms: [] | FilmType[];
  };
  FILMS: {
    films: FilmType[];
    promoFilm: FilmType;
    statusLoadFilms: string | null;
    statusLoadPromo: string | null;
  };
  USER: {
    authStatus: string | null;
    user: UserType
  }
}

export {
  CommentRAWType,
  CommentType,
  DataInputCommentType,
  DataInputSignInType,
  FilmType,
  RootState,
  UserType,
  UserRAWType,
};
