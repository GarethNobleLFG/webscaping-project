module.exports = {
  development: {
    username: "postgres",
    password: process.env.LOCAL_POSTGRES_PASSWORD,
    database: "webscaping",
    host: "db",
    dialect: "postgres"
  }
};