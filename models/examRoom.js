/* class Meta:
unique_together = (('name','examCenter'),)
name = models.CharField(max_length=255,blank=False)
capacity = models.IntegerField(blank=False)
examCenter = models.ForeignKey(ExamCenter,on_delete=models.CASCADE,related_name="examRooms")
 */

const db = require('./sequelize-db');
const Sequelize = require('sequelize');
const ExamRoom = db.define('examRoom',{
    name: {
        type:Sequelize.STRING,
        primaryKey:true, 
    },
    ec_id:{
        type:Sequelize.UUID,
        primaryKey:true
    },
    capacity: Sequelize.INTEGER
});

module.exports = ExamRoom;