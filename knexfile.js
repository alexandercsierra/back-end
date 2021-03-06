// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    }
  },
  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './data/wunderlist.db3'
  //   },
  //   migrations: {
  //     directory: './data/migrations'
  //   },
  //   seeds: {
  //     directory: './data/seeds'
  //   },
  //   useNullAsDefault: true
  // },

  staging: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations',
      tableName: 'knex_migrations'
    }
  }

};
