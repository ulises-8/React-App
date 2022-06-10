const process = require('process');

// Printing process.pid
console.log("process id is " + process.pid);

const express = require('express');   //server 
const db = require('./db')            //database
const cors = require('cors')          //front-end and back-end have different origins. Potential issues. 

const app = express();
const PORT = 9000;
app.use(cors());                    //Allowing request from all origins.
app.use(express.json())


//Route to make request to server for API to get all countries
app.get("/api/get/countries", (req,res)=>{
    db.query("SELECT DISTINCT country FROM destinations", (err,result)=>{
        if(err) {
        console.log(err)
        } 
        res.send(result)
    });   });

// Route to get all cities
app.get("/api/get/cities/:country", (req, res)=>{
    db.query(`SELECT city FROM destinations WHERE country = '${req.params.country}'`, function(err,result) {
        if(err) {
        console.log(err)
        } 
        res.send(result)
    });   });

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})