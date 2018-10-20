const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const examRoom = db.define('room',{
    name: Sequelize.STRING,
    capacity: Sequelize.INTEGER
});

module.exports = examRoom;