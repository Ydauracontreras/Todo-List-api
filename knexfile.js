// Update with your config settings.
// Update with your config settings.

module.exports = {


  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    migrations:{
      directory:'./api/migrations'
    },
    seeds:{
      directory: './api/seeds'
    },
  },
  production:{
      client: 'pg',
      connection: process.env.DATABASE_URL,
      migrations: {
          directory: __dirname + '/db/migrations',
        },
      seeds: {
          directory: __dirname + '/db/seeds',
  }
  }
}
