/* title = models.CharField(max_length=255,unique=True)
examCenters = models.ManyToManyField(ExamCenter,related_name="exams")
 */
const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const Exam = db.define('exam',{
    title:Sequelize.STRING,
    id: {
        type:Sequelize.UUID,
        primaryKey:true
    }
});

module.exports = ExamDate;