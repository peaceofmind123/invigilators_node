const db = require('./sequelize-db');
const Sequelize = require('sequelize');

const ConductedIn = db.define('conducted_in',{
    ec_id: {
        type:Sequelize.UUID,
        primaryKey:true
    },
    e_id: {
        type:Sequelize.UUID,
        primaryKey:true
    }
});

module.exports = ConductedIn;