const express = require('express');
const morgan = require('morgan');
const logger = require('./12-Logger.js');
const authorize = require('./13-Authorize.js');

const app = express();

// req => middleware => res

// 1) use vs route
// 2) options - our own / express / third party
// app.use([logger,authorize]); Our Own Middleware
// app.use(express.static('./public')); Express Provided Middleware
// app.use(morgan('tiny')) Third Party Provided Middleware

// app.use([logger,authorize]);
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

app.get('/api/occupation',[logger,authorize],(req,res)=>{
    // localhost:8080/api/occupation?user=abdullah
    console.log(req.user);
    res.send('Occupation');
});

app.listen(8080,()=>{
    console.log('App is running on port 8080');
});