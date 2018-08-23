require('dotenv').config();

module.exports = {
  development: {
    username: 'fassfinder',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'bangpa_database',
    host: 'bangpa.cakgmv9gidk7.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
operatorsAliases: 'false',
  },
  production: {
    username: 'fassfinder',
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'bangpa_database',
    host: 'bangpa.cakgmv9gidk7.us-east-2.rds.amazonaws.com',
    dialect: 'mysql',
operatorsAliases: 'false',
    logging: false,
  },
};