module.exports = {
  development: {
    username: 'database_dev',
    password: 'database_dev',
    database: 'podcodar-platform',
    host: 'postgres-db',
    port: 5432,
    dialect: 'postgres',
  },
  test: {
    username: 'database_dev',
    password: 'database_dev',
    database: 'podcodar-platform',
    host: 'postgres-db-test',
    port: 5430,
    dialect: 'postgres',
  },
  production: {
    username: 'database_dev',
    password: 'database_dev',
    database: 'podcodar-platform',
    host: 'postgres-db',
    port: 5432,
    dialect: 'postgres',
  },
}
