class Film {
  constructor(film) {
    this.backgroundColor = film[`background_color`];
    this.backgroundImage = film[`background_image`];
    this.description = film[`description`];
    this.director = film[`director`];
    this.genre = film[`genre`];
    this.id = film[`id`];
    this.isFavorite = film[`is_favorite`];
    this.name = film[`name`];
    this.posterImage = film[`poster_image`];
    this.previewImage = film[`preview_image`];
    this.previewVideoLink = film[`preview_video_link`];
    this.scoreCount = film[`scores_count`];
    this.starring = film[`starring`];
    this.rating = film[`rating`];
    this.released = film[`released`];
    this.runTime = film[`run_time`];
    this.video = film[`video_link`];
  }

  toRAW() {
    return {
      'backgroundColor': this.backgroundColor,
      'backgroundImage': this.backgroundImage,
      'description': this.description,
      'director': this.genre,
      'genre': this.id,
      'id': this.film[`id`],
      'isFavorite': this.isFavorite,
      'name': this.name,
      'posterImage': this.posterImage,
      'previewImage': this.previewImage,
      'previewVideoLink': this.previewVideoLink,
      'scoreCount': this.scoreCount,
      'starring': this.starring,
      'rating': this.rating,
      'released': this.released,
      'runTime': this.runTime,
      'video': this.video,
    };
  }

  static parseFilm(film) {
    return new Film(film);
  }

  static parseFilms(films) {
    return films.map(Film.parseFilm);
  }
}

export default Film;
