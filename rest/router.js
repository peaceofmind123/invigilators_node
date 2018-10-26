const express = require('express'); 
const Model = require('./models/Model');
const Sequelize = require('sequelize');
const uuid = require('uuid/v4');
let router = express.Router();

router.route('/')
.get((req,res)=>{
    
    
    Model.Exam.findAll().then((exams)=>{
        res.json({exams:exams})
    })
});

module.exports = router;