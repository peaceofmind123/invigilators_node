/* class Meta:
        unique_together = (('exam','date','shift','examroom'),)
    exam = models.ForeignKey(Exam,on_delete=models.CASCADE,related_name='invigilator_assignments')
    # related to invigilator with a reverse relation "invigilators"
    date = models.ForeignKey(ExamDate,on_delete=models.CASCADE,related_name='invigilator_assignments')
    shift = models.ForeignKey(Shift,on_delete=models.CASCADE,related_name='invigilator_assignments')
    examroom = models.OneToOneField(ExamRoom,on_delete=models.CASCADE,null=True,unique=False)
 */

const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const InvigilatorAssignment = db.define('invigilatorAssignment',{
        i_dob:{
            type:Sequelize.DATE,
            primaryKey:true
        },
        ei_id:{
            type:Sequelize.UUID,
            primaryKey:true
        }
});

module.exports = InvigilatorAssignment;
