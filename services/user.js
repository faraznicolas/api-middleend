const axios = require('axios');
const config = require('../config');

class UserService {
    constructor(id) {
        this.api = axios.create({
            baseURL: `${config.baseUrl}/users/${id}`,
        });
    }

    async getAuthor() {
        try {
            const { data } = await this.api.get();
            return { author: { name: data.nickname, lastname: '' } };
        } catch (e) {   
            throw new Error(e);
        }
    }
}

module.exports = UserService;