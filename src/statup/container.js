const {createContainer, asClass, asValue, asFunction} = require('awilix');
const config = require('../config')
const HomeService = require('../services/home.service');
const HomeController = require('../controllers/home.controller');
const HomeRoutes = require('../routes/home.routes');
const Routes = require('../routes/index');
const app = require('.')
const container = createContainer();

container.register({
    app: asClass(app).singleton(),
    config: asValue(config),
    router: asFunction(Routes).singleton(),
    HomeService: asClass(HomeService).singleton(),
    HomeController: asClass(HomeController.bind(HomeController)).singleton(),
    HomeRoutes: asFunction(HomeRoutes).singleton()
});

module.exports = container;