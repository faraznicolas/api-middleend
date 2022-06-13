const { logResponse } = require('../helpers/log-response');
const logger = require('../logger');
const SearchService = require('../services/search');

const getProductos = async (req, res) => {

    const { query } = req;
    const { site } = req.params
    const { mock = false } = req;
    if (mock) {
        return res.status(200).json(require('../mocks/search.json'))

    }
    try {
        const searchService = new SearchService(site, query);
        const result = await searchService.getResult();

        res.status(200).json({
            ...result
        });
        logResponse(res.getHeaders(),result)
        return res;
    } catch (error) {
        logger.error(error);
        return res.status(400).json({
            msg: 'Bad request'
        });
    }
};

module.exports = {
    getProductos
};