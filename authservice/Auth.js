class AuthService {
  constructor() {
    this.users = new Map();
  }

  login(username, password) {
    return {
      success: false,
      message: "Not implemented yet",
    };
  }
}

module.exports = AuthService;
