const express = require('express');
const router = express.Router();

const { Employee } = require('../models/employee');

//get all employees 
router.get('/api/employees', (req, res) => {
    Employee.find({},(err, data) => {
        if(!err){
            res.send(data);
        }
        else {
            console.log(err);
        }
    });
});

//save employee

router.post('api/employee/add', (req, res) => {
    const emp = new Employee({
    name: req.body.name,
    email: req.body.email,
    salary: req.body.salary
});
emp.save((err, data) => {
    res.status(200).json({ code:200, message: 'Employee Added Successfully', addEmployee:data })
});
});


module.exports = router;
