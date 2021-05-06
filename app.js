const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/Employees'

const app = express()
mongoose.connect(url,  {useNewUrlParser:true})
const con = mongoose.connection
con.on('open', () =>
{
    console.log("connected.....!")
})

app.use(express.json())


const employeeRouter = require('./routers/employees')
app.use('/employees',employeeRouter)
app.listen(5000, () =>
{
    console.log("server running in 5000")
})