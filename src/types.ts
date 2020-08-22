type CommentRAWType = {
  rating: string,
  comment: string,
}

type CommentType ={
  id: number,
  user: {
    id: number,
    name: string,
  },
  rating: number,
  text: string,
  date: number,
};

type FilmType = {
  backgroundImage: string,
  description: string,
  director: string,
  genre: string,
  isFavorite: boolean,
  id: number,
  name: string,
  posterImage: string,
  previewImage: string,
  previewVideoLink: string,
  rating: number,
  released: number,
  runTime: number,
  scoreCount: number,
  starring: string[],
  video: string,
};

type UserType = {
  avatarUrl: string,
  email: string,
  id: number,
  name: string,
}

type UserRAWType = {
  email: string,
  password: string,
}

export {
  CommentRAWType,
  CommentType,
  FilmType,
  UserType,
  UserRAWType,
};
