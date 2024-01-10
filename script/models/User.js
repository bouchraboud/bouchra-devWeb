const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize"); // Assurez-vous d'ajuster le chemin en fonction de votre structure de fichiers

const User = sequelize.define("User", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cart_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "Cart",
            key: "cart_id",
        },
    },
});

module.exports = User;

User.belongsTo(Cart, { foreignKey: "cart_id" });