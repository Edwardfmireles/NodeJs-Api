const { Router } = require('express');

module.exports = HomeRouters = ({HomeController}) => {
    const router = Router();

    router.get('/', HomeController.index);
    return router;
}

