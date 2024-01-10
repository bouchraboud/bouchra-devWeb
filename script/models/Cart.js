const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Cart = sequelize.define("Cart", {
    cart_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
   
});

module.exports = Cart;