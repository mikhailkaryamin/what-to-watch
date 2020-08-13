const initialState = {
  COMMENT: {
    comments: [{
      id: 1,
      user: {
        id: 1,
        name: `Simple name`,
      },
      rating: 9,
      text: `some text`,
      date: 1293843434,
    },
    {
      id: 2,
      user: {
        id: 2,
        name: `Simple name`,
      },
      rating: 6,
      text: `some text`,
      date: 129384343,
    },
    {
      id: 3,
      user: {
        id: 3,
        name: `Simple name`,
      },
      rating: 9,
      text: `some text`,
      date: 12938034343183,
    }],
    statusUploadComment: null,
  },
  FILMS: {
    films: [
      {
        backgroundImage: `img/aviator.jpg`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
        director: `Arthur Agee`,
        genre: `Comedy`,
        id: 1,
        name: `Devin Albert`,
        posterImage: `img/aviator.jpg`,
        previewImage: `img/aviator.jpg`,
        previewVideoLink: `link`,
        rating: 3,
        released: 2015,
        runTime: 100,
        scoreCount: 300,
        starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
        video: `some/link`,
      },
      {
        backgroundImage: `img/aviator.jpg`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
        director: `Arthur Agee`,
        genre: `Comedy`,
        id: 2,
        name: `Devin Albert`,
        posterImage: `img/aviator.jpg`,
        previewImage: `img/aviator.jpg`,
        previewVideoLink: `link`,
        rating: 2,
        released: 2015,
        runTime: 100,
        scoreCount: 300,
        starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
        video: `some/link`,
      },
      {
        backgroundImage: `img/aviator.jpg`,
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
        director: `Arthur Agee`,
        genre: `Comedy`,
        id: 3,
        name: `Devin Albert`,
        posterImage: `img/aviator.jpg`,
        previewImage: `img/aviator.jpg`,
        previewVideoLink: `link`,
        rating: 3,
        released: 2015,
        runTime: 100,
        scoreCount: 300,
        starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
        video: `some/link`,
      }
    ],
    promoFilm: {
      backgroundImage: `img/aviator.jpg`,
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
      director: `Arthur Agee`,
      genre: `Comedy`,
      id: 1,
      name: `Devin Albert`,
      posterImage: `img/aviator.jpg`,
      previewImage: `img/aviator.jpg`,
      previewVideoLink: `link`,
      rating: 3,
      released: 2015,
      runTime: 100,
      scoreCount: 300,
      starring: [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
      video: `some/link`,
    },
    statusLoad: false,
  },
  OPTIONS: {
    amountRenderFilmCard: 8,
    genre: `All genres`,
    film: null,
  },
  USER: {
    authStatus: `NO_AUTH`,
    user: {
      id: 777,
      email: `mail@hotmail.com`,
      name: `Vasya`,
      avatarUrl: `/img/pic.jpg`,
    },
  }
};


export {initialState};
