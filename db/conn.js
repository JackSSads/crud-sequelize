const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;