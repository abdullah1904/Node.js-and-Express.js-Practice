// Whatever after the question mark isn't technically part of this url. It's just a way for us to send that data to the server and then server decide what to do with that data
const express = require('express');
const jsonData = require('./5-Express JSON Basics (Data)');

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send('<h1>Home Page</h1><a href="/api/all">All</a> <a href="/api/occupation">Occupation</a>');
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

app.get('/api/occupation/:id',(req,res)=>{
    const {id} = req.params; 
    const singleJsonData = jsonData.data.find((data)=>data.id === Number(id));
    if(singleJsonData){
        return res.status(200).json(singleJsonData);
    }
    else{
        return res.status(404).send("404 - Person Not Found");
    }
});

app.get('/api/occupation/:id/name/:name',(req,res)=>{
    const {id,name} = req.params;
    res.send(`Hello, ${name}`);
});

app.get('/api/v1/query',(req,res)=>{
    const {search, limit} = req.query;
    let sortedProducts = [...jsonData.data];
    if(search){
        sortedProducts = sortedProducts.filter((data)=>{
            return data.name.startsWith(search.toUpperCase());
        });
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }
    if(sortedProducts.length > 0){
        // Return is important otherwise express will confuse in already send response
        res.status(200).json(sortedProducts);
    }
    res.status(404).send('404 - Resource Not Found');
});

app.all('*',(req,res)=>{
    res.status(404).send("404 - Resource Not Found");
});

app.listen(8080,()=>{
    console.log('App is running on 8080 Port');
});