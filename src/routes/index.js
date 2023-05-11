const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { ErrorMiddleware, NotFoundMiddleware } = require('../middlewares');
require('express-async-error');

module.exports = ({HomeRoutes}) => {
    const router = express.Router();
    const apiRouter = express.Router();

    apiRouter
            .use(express.json())
            .use(cors())
            .use(helmet())
            .use(compression())
            .use('/home', HomeRoutes);

    router
        .use('/v1/api', apiRouter)
        .use(ErrorMiddleware)
        .use(NotFoundMiddleware);


    return router;
}