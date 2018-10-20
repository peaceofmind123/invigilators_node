/* shiftName = models.CharField(max_length=255,blank=False,unique=True)
exam = models.ForeignKey(Exam,on_delete=models.CASCADE,related_name="shifts")
startTime = models.TimeField()
endTime = models.TimeField()
 */

const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const ExamShift = db.define('examShift',{
    startTime:Sequelize.TIME,
    endTime: Sequelize.TIME
});

module.exports = ExamShift;
