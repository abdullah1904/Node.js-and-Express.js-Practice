const express = require('express');
const logger = require('./12-Logger.js');
const authorize = require('./13-Authorize.js');

const app = express();

// req => middleware => res
app.use([logger,authorize]);
// app.use([authorize,logger]);
// app.use('/api',logger);

app.get('/',(req,res)=>{
    res.send('Home');
});

app.get('/about',(req,res)=>{
    res.send('About');
});

app.get('/api/all',(req,res)=>{
    res.send('All');
});

app.get('/api/occupation',(req,res)=>{
    // localhost:8080/api/occupation?user=abdullah
    console.log(req.user);
    res.send('Occupation');
});

app.listen(8080,()=>{
    console.log('App is running on port 8080');
});