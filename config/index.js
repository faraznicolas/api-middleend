require('dotenv').config();

const config = {
    port: process.env.PORT,
    baseUrl: process.env.BASE_URL,
    token: process.env.TOKEN,
    tokenMock: process.env.TOKEN_MOCK,
}

module.exports = config;