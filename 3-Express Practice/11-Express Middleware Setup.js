// Express Middleware are functions that execute during the request to the server each middleware function has access to request and response object
const express = require('express');

const app = express();

// req => middleware => res

// Middleware Function
const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    next();
}

app.get('/',logger,(req,res)=>{
    res.send('Home');
});

app.get('/about',logger,(req,res)=>{
    res.send('About');
});

app.listen(8080,()=>{
    console.log('App is running on port 8080');
});