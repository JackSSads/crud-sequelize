const { DataTypes } = require('sequelize');

const db = require('../db/conn');

const Products = db.define('Products',{
    nameProduct: {
        type: DataTypes.STRING,
        required: true,
    },
    valueProduct: {
        type: DataTypes.STRING,
        required: true,
    },
});

module.exports = Products;