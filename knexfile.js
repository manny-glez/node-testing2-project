module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { 
      directory: './data/migrations' 
    },
    seeds: { 
      directory: './data/seeds' 
    },
    connection: {
      filename: './data/cities.db3',
    },
  },
  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    migrations: { 
      directory: './data/migrations' 
    },
    seeds: { 
      directory: './data/seeds' 
  },
    connection: {
    },
      filename: './data/cities.db3',
}
};