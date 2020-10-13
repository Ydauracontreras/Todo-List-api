const server = require('./api/server');


server.set('port', (process.env.PORT || 5000))