const API_COMMENT = [{
  'id': 1,
  'user': {
    'id': 1,
    'name': `Simple name`,
  },
  'rating': 9,
  'text': `some text`,
  'date': 1293843434,
},
{
  'id': 2,
  'user': {
    'id': 2,
    'name': `Simple name`,
  },
  'rating': 6,
  'text': `some text`,
  'date': 129384343,
},
{
  'id': 3,
  'user': {
    'id': 3,
    'name': `Simple name`,
  },
  'rating': 9,
  'text': `some text`,
  'date': 12938034343183,
}];

const API_FILM = {
  'background_image': `img/aviator.jpg`,
  'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
  'director': `Arthur Agee`,
  'genre': `Comedy`,
  'id': 1,
  'is_favorite': false,
  'name': `Devin Albert`,
  'poster_image': `img/aviator.jpg`,
  'preview_video_link': `link`,
  'rating': 3,
  'released': 2015,
  'run_time': 100,
  'scores_count': 300,
  'starring': [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
  'video': `some/link`,
};

const API_FILM_FAVORITE = {
  'background_image': `img/aviator.jpg`,
  'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
  'director': `Arthur Agee`,
  'genre': `Comedy`,
  'id': 1,
  'is_favorite': true,
  'name': `Devin Albert`,
  'poster_image': `img/aviator.jpg`,
  'preview_video_link': `link`,
  'rating': 3,
  'released': 2015,
  'run_time': 100,
  'scores_count': 300,
  'starring': [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
  'video': `some/link`,
};

const API_FILMS = [
  {
    'background_image': `img/aviator.jpg`,
    'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    'director': `Arthur Agee`,
    'genre': `Comedy`,
    'id': 1,
    'is_favorite': false,
    'name': `Devin Albert`,
    'poster_image': `img/aviator.jpg`,
    'preview_video_link': `link`,
    'rating': 3,
    'released': 2015,
    'run_time': 100,
    'scores_count': 300,
    'starring': [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    'video': `some/link`,
  },
  {
    'background_image': `img/aviator.jpg`,
    'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    'director': `Arthur Agee`,
    'genre': `Comedy`,
    'id': 2,
    'is_favorite': false,
    'name': `Devin Albert`,
    'poster_image': `img/aviator.jpg`,
    'preview_video_link': `link`,
    'rating': 2,
    'released': 2015,
    'run_time': 100,
    'scores_count': 300,
    'starring': [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    'video': `some/link`,
  },
  {
    'background_image': `img/aviator.jpg`,
    'description': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Aliquam a justo elit. Nulla vitae hendrerit dolor. Sed luctus massa lectus.`,
    'director': `Arthur Agee`,
    'genre': `Comedy`,
    'id': 3,
    'is_favorite': false,
    'name': `Devin Albert`,
    'poster_image': `img/aviator.jpg`,
    'preview_video_link': `link`,
    'rating': 3,
    'released': 2015,
    'run_time': 100,
    'scores_count': 300,
    'starring': [`Arthur Agee`, `Robert Agnew`, `Alan Aisenberg`],
    'video': `some/link`,
  }
];

const API_USER = {
  'avatar_url': `avatarUrl`,
  'email': `email@email.ru`,
  'id': 100,
  'name': `name`,
};

export {
  API_COMMENT,
  API_FILM,
  API_FILM_FAVORITE,
  API_FILMS,
  API_USER,
};
