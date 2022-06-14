const buildItemResponse = (itemData, itemDescriptionData) => {
    return {
        seller_id: itemData.seller_id,
        item: {
            id: itemData.id,
            title: itemData.title,
            price: {
                currency: itemData.currency_id,
                amount: itemData.price,
                decimals: Number("0." + (itemData.price + "").split(".")[1])
            },
            picture: itemData.thumbnail,
            condition: itemData.condition,
            free_shipping: itemData.shipping.free_shipping,
            sold_quantity: itemData.sold_quantity,
            description: itemDescriptionData.plain_text
        }
    }
}

const buildSearchResponse = (paging, results) => {
    const { primary_results, ...pag } = paging;
    const items = results.map((item) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: Number("0." + (item.price + "").split(".")[1])
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping
        }
    });
    const cat = results.map(item => item.category_id)
    const categories = cat.filter((item, index) => cat.indexOf(item) === index);
    const resp = {
        paging: pag,
        categories,
        items
    }
    return resp;
}

module.exports = {
    buildItemResponse,
    buildSearchResponse
}