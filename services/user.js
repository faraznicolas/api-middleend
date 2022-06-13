const axios = require('axios');
const config = require('../config');

class UserService {
    constructor(id) {
        this.api = axios.create({
            baseURL: `${config.baseUrl}/users/${id}`,
        });
    }

    async getAuthor() {
        const { data } = await this.api.get();
        return { author: { name: data.nickname, lastname: '' } };
    }
}

module.exports = UserService;