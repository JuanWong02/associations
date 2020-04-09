const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db');

const Model = Sequelize.Model;

class Group extends Model {};

Group.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'group'
});

module.exports = {Group};