const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('crudsequelize', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;