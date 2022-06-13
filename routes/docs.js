const { Router } = require("express");

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const config = require("../config");

const route = Router();

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "API Middleend",
            description: "API para test practico en Mercado Libre",
            servers: [`http://localhost:${config.port}`]
        }
    },
    basePath: "/",
    apis: ['./docs/*.yaml']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
route.use('/',swaggerUI.serve);
route.get('/',swaggerUI.setup(swaggerDocs));

module.exports = route;