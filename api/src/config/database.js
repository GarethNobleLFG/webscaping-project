const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('webscaping', 'postgres', process.env.LOCAL_POSTGRES_PASSWORD, {  host: 'db',
  dialect: 'postgres',
  logging: false, 
});

module.exports = sequelize;