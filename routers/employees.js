const express = require('express')
const router = express.Router()
const Employee =require('../models/employee')
router.get('/',async(req,res) =>
{
    try 
    {
        const employees = await Employee.find()
        res.json(employees)
    }
    catch(err)
    {
        res.send('Error' + err)
    }
})
router.get('/:id',async(req,res) =>
{
    try 
    {
        const employee = await Employee.findById(req.params.id)
        res.json(employee)
    }
    catch(err)
    {
        res.send('Error' + err)
    }
})

router.post('/', async(req,res) =>
{
    const employee = new Employee({
        name : req.body.name,
        id: req.body.id,
        email : req.body.email
    })
    try
    {
        const e1 = await employee.save()
        res.json(e1)
    }
    catch(err)
    {
        res.send('Error')
    }
})

module.exports = router