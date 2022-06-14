const axios = require('axios');
const config = require('../config');
const { buildSearchResponse } = require('../helpers/build-response');

class SearchService {
    constructor(site, query) {
        const { q, limit = 50, offset = 0, orderPrice = 'ASC' } = query;
        this.order = orderPrice
        this.api = axios.create({
            baseURL: encodeURI(`${config.baseUrl}/sites/${site}/search?q=${q}&limit=${limit}&offset=${offset}`),
        });
    }

    async getResult() {
        try {
            const { data } = await this.api.get();
            data.results.sort((a, b) => this.order === 'ASC' ? b.price - a.price : a.price - b.price);
            return buildSearchResponse(data.paging, data.results);
        } catch (error) {
            throw new Error(error);
        }

    }
}

module.exports = SearchService