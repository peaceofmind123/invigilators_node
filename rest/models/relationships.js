const db = require('./sequelize-db');
const Sequelize = require('sequelize');

const Exam = require('./exam');
const ExamCenter = require('./examCenter');
const ExamDate = require('./examDate');
const ExamRoom = require('./examRoom');
const ExamShift = require('./examShift');
const Invigilator = require('./invigilator');
const InvigilatorAssignment = require('./invigilatorAssignment');

Exam.hasMany(ExamDate,{as:'ExamDates',foreignKey:'examTitle',sourceKey:'title'});
Exam.belongsToMany(ExamCenter,{through:'conducted_in'});
ExamCenter.belongsToMany(Exam,{through:'conducted_in'});

