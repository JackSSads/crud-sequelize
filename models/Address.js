const {DataTypes} = require("sequelize");

const db = require("../db/conn");

const User = require("./User");

const Address = db.define("Address", {

    street: {
        type: DataTypes.STRING,
        required: true,
    },
    number: {
        type: DataTypes.STRING,
        required: true,
    },
    city: {
        type: DataTypes.STRING,
        required: true,
    },
});

User.hasMany(Address); // um usuário tem vários endereços (1 M)
Address.belongsTo(User);

module.exports = Address;
