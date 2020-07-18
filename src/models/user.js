class User {
  constructor(user) {
    this.avatarUrl = user[`avatar_url`];
    this.email = user[`email`];
    this.id = user[`id`];
    this.name = user[`name`];
  }

  toRAW() {
    return ({
      'avatar_url': this.avatarUrl,
      'email': this.email,
      'id': this.id,
      'name': this.name,
    });
  }

  static parseUser(user) {
    return new User(user);
  }
}

export default User;

