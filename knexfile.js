

module.exports = {
  development: {
    client: 'pg',
    connection: {
      filename: 'postgres://localhost/redditServer'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true'
  }
};
