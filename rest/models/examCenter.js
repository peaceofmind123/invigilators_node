/* title = models.CharField(max_length=255,unique=True)
 */

 
const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const ExamCenter = db.define('examCenter',{
    title: Sequelize.STRING
});

module.exports = ExamCenter;