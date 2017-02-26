const fromController = require('./controllers/routeController');

const getRoutes = function(app) {
  app.get('/api', fromController.getApiHome);
};

module.exports = {getRoutes};