/* name = models.CharField(unique=True,max_length=255,blank=False)
    assignments = models.ManyToManyField(InvigilatorAssignment,related_name='invigilators',blank=True)
    dob = models.DateField(unique=True)
    examroom = models.ForeignKey(ExamRoom,related_name='invigilators',blank=True,null=True,on_delete=models.CASCADE)
 */
const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const Invigilator = db.define('invigilator',{
    name: Sequelize.STRING,
    dob: {
        type:Sequelize.DATE,
        primaryKey:true
    },
    post:{
        type:Sequelize.STRING,
        
    }
});

module.exports = Invigilator;
