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
        const resp = await searchService.getResult();

        return res.status(200).json({
            ...resp
        });
    } catch (error) {
        return res.status(400).json({
            msg: 'Bad request'
        });
    }
};

module.exports = {
    getProductos
};