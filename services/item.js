const axios = require('axios');
const config = require('../config');
const { buildItemResponse } = require('../helpers/buildResponse');

class ItemService {
    constructor(id) {
        this.apiItem = axios.create({
            baseURL: `${config.baseUrl}/items/${id}`,
        });
        this.apiItemDescription = axios.create({
            baseURL: `${config.baseUrl}/items/${id}/description`,
        });
    }

    async getItem() {
        const promiseItem = this.apiItem.get();
        const promiseItemDescription = this.apiItemDescription.get();
        return await Promise.all([promiseItem, promiseItemDescription]).then(res => {
            const [item, description] = res;
            return buildItemResponse(item.data, description.data)

        }).catch((e) => {
            return e
        });
    }
}

module.exports = ItemService