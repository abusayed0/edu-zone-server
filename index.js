const express = require('express');
const cors = require('cors')
const app =express();
const port = process.env.Port || 5000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("Edu Zone server");
})

const courses = require("./data/courses/coureses.json")
app.get("/courses",(req,res)=>{
    res.send(courses)
})

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})