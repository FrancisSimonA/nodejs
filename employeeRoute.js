const express = require("express");
const router = express.Router()
const employeeModel = require("../models/employeeModel")

router.get("/", async (req, res) => {
    try {
        const employees = await employeeModel.find()
        res.json(employees)
    } catch(err) {
        res.send("Error" + err)
    }
    
    console.log("Get Request")
    
})

router.post("/", async(req, res) => {
    const employee = new employeeModel({
        name: req.body.name,
        email: req.body.email,
        
    })
    try {
        const e1 = await employeeModel.save()
        res.json(e1)
    } catch(err) {
        res.send("Error")
    }
})

module.exports = router
