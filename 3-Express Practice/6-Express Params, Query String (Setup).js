const express = require('express');
const jsonData = require('./5-Express JSON Basics (Data)');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1><a href="/api/all">All</a> <a href="/api/occupation">Occupation</a>')
});

app.get('/api/all',(req,res)=>{
    res.status(200).json(jsonData);
});

app.get('/api/occupation',(req,res)=>{
    const newJsonData = jsonData.data.map((data)=>{
        const {name,occupation}= data;
        return {name,occupation};
    });
    res.status(200).json(newJsonData);
});

app.all('*',(req,res)=>{
    res.status(404).send("404 - Resource Not Found");
});

app.listen(8080,()=>{
    console.log('App is running on 8080 Port');
});