class UserService {
    constructor() {
        this.users = [];
    }

    createUser(username, email) {
        return {
            id: null,
            username,
            email,
            createdAt: new Date()
        };
    }
}

module.exports = UserService;