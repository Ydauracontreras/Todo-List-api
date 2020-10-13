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
  useNullAsDefault: true
  },

  production:{
    client:'pg',
    connection: {
      filename: process.env.DATABASE_URL,
      migrations:{
      directory:'./api/migrations'
    },
    seeds:{
      directory: './api/seeds'
    },
    },
  }
};