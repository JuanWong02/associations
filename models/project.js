const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db');

const Model = Sequelize.Model;

class Project extends Model {};

Project.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'project'
});

module.exports = {Project};