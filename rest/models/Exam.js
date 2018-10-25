/* title = models.CharField(max_length=255,unique=True)
examCenters = models.ManyToManyField(ExamCenter,related_name="exams")
 */
const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const Exam = db.define('exam',{
    title:{
        type:Sequelize.STRING,
        primaryKey:true
    
    }
});

module.exports = ExamDate;