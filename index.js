const server = require('./server');

const HOST = 'ec2-75-101-232-85.compute-1.amazonaws.com'
const PORT = 5432;


server.listen(PORT, () => console.log(`Server Running at ${HOST}:${PORT}`))


