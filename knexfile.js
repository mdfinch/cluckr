// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "cluckr_quiz",
      username: "tungsten",
      password: "postgres"
    },

    migrations: {
      tableName: "migrations",
      directory: "./db/migrations"
    },
    seeds: {
      directory: "./db/seeds"
    }
  }
};