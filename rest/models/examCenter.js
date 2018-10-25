/* title = models.CharField(max_length=255,unique=True)
 */

 
const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const ExamCenter = db.define('examCenter',{
    title:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    address:{
        type:Sequelize.STRING,
        primaryKey:true
    }
});

module.exports = ExamCenter;