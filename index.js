const server = require('./api/server');

const HOST = 'localhost'
const PORT = 4000;


server.listen(PORT, () => console.log(`Server Running at ${HOST}:${PORT}`))