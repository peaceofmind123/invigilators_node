/* class Meta:
unique_together=(('date', 'exam'),)
date = models.DateField(blank=False)
exam = models.ForeignKey(Exam,on_delete=models.CASCADE,related_name="dates")
examCenters = models.ManyToManyField(ExamCenter,related_name="dates")
 */

const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const ExamDate = db.define('examDate',{
    date: {
        type:Sequelize.DATE,
        primaryKey:true, //actually a partial key
        }   
});

module.exports = ExamDate;