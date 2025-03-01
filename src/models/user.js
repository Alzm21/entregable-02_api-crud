const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection'); 
 
const User = sequelize.define('user', {

    first_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    birthday: {
        type: DataTypes.STRING(15),
        allowNull: true
    }
});

module.exports = User;