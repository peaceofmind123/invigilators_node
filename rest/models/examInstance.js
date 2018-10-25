const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const ExamInstance = db.define('examInstance',{
        id:{
            type:Sequelize.UUID,
            primaryKey:true
        },
        e_id: Sequelize.UUID,
        es_name: Sequelize.STRING,
        ed_date:Sequelize.DATE,
        ec_id: Sequelize.UUID,
        er_name: Sequelize.STRING
});

module.exports = ExamInstance;