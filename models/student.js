const {Sequelize, DataTypes} = require('sequelize');
const {sequelize} = require('./../config/db');

const Model = Sequelize.Model;

class Student extends Model {};

Student.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'student'
});

module.exports = {Student};