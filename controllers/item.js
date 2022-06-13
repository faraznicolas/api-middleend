const axios = require('axios');
const ItemService = require('../services/item');
const UserService = require('../services/user');

const getItem = async (req , res) => {
    const { mock = false } = req;
    if (mock) {
        return res.status(200).json(require('../mocks/item.json'))

    }
    try {
        const { id } = req.params
        const itemService = new ItemService(id);
        const { item, seller_id } = await itemService.getItem();
        const userService = new UserService(seller_id);
        const { author } = await userService.getAuthor();
        const result = { author, item }

        return res.status(200).json({
            ...result,
        });

    } catch (error) {
        return res.status(400).json({
           msg:'Bad request'
        });
    }
};

module.exports = {
    getItem
};