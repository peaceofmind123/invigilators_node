const db = require('./sequelize-db');
const Sequelize = require('sequelize');

const Exam = require('./exam');
const ExamCenter = require('./examCenter');
const ExamDate = require('./examDate');
const ExamRoom = require('./examRoom');
const ExamShift = require('./examShift');
const Invigilator = require('./invigilator');
const InvigilatorAssignment = require('./invigilatorAssignment');
const ExamInstance = require('./examInstance');
const ConductedIn = require('./conductedIn');

ExamCenter.hasMany(ExamRoom,{foreignKey:'ec_id',sourceKey:'id'});
ExamCenter.belongsToMany(Exam,{through:ConductedIn,foreignKey:'ec_id',otherKey:'e_id'});
ExamCenter.hasMany(ExamInstance,{foreignKey:'ec_id',sourceKey:'id'});
Exam.belongsToMany(ExamCenter,{through:ConductedIn,foreignKey:'e_id',otherKey:'ec_id'});
Exam.hasMany(ExamShift,{foreignKey:'e_id',sourceKey:'id'});
Exam.hasMany(ExamInstance,{foreignKey:'e_id',sourceKey:'id'});
Exam.hasMany(ExamDate,{foreignKey:'e_id',sourceKey:'id'});
ExamShift.hasMany(ExamInstance,{foreignKey:'es_name',sourceKey:'name'});
ExamDate.hasMany(ExamInstance,{foreignKey:'ed_date',sourceKey:'date'});
ExamRoom.hasMany(ExamInstance,{foreignKey:'er_name',sourceKey:'name'});
ExamInstance.belongsToMany(Invigilator,{through:InvigilatorAssignment,foreignKey:'ei_id',otherKey:'i_dob'});
Invigilator.belongsToMany(ExamInstance,{through:InvigilatorAssignment,foreignKey:'i_dob',otherKey:'ei_id'});
db.sync();
module.exports = {
    ExamCenter:ExamCenter,
    Exam:Exam,
    ExamRoom:ExamRoom,
    ExamShift:ExamShift,
    ExamDate:ExamDate,
    ExamInstance:ExamInstance,
    Invigilator:Invigilator,
    InvigilatorAssignment:InvigilatorAssignment,
    ConductedIn:ConductedIn
}
