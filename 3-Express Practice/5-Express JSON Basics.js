const express = require('express');
const jsonData = require('./5-Express JSON Basics (Data)');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).json(jsonData);
});

app.all('*',(req,res)=>{
    res.status(404).send("404 - Resource Not Found");
});

app.listen(8080,()=>{
    console.log('App is running on 8080 Port');
});