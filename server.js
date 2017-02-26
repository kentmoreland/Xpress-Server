const express = require("express");
const app = express();
const fromFile = require('./server/includes');

fromFile.middleware.runMiddleware(app);
fromFile.routes.getRoutes(app);

app.listen(fromFile.config.getPort, () => {
  console.log(`Listening on port ${fromFile.config.getPort}...`);
});

module.exports = app;