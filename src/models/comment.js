class Comment {
  constructor(comment) {
    this.date = Date.parse(comment[`date`]);
    this.id = comment[`id`];
    this.text = comment[`comment`];
    this.rating = comment[`rating`];
    this.user = {
      id: comment.user[`id`],
      name: comment.user[`name`],
    };
  }

  toRAW() {
    return {
      'comment': this.comment,
      'date': this.date,
      'id': this.id,
      'rating': this.rating,
      'user': {
        'id': this.user.id,
        'name': this.user.name
      }
    };
  }

  static parseComment(comment) {
    return new Comment(comment);
  }

  static parseComments(comments) {
    return comments.map(Comment.parseComment);
  }
}

export default Comment;
