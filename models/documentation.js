const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db');

const Model = Sequelize.Model;

class Documentation extends Model {};

Documentation.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'documentation'
});

module.exports = {Documentation};