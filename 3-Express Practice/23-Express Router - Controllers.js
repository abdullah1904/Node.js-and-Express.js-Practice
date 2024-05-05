const express = require('express');
const jsonData = require('./5-Express JSON Basics (Data).js').data;

const app = express();

const dataRouter = require('./routes/dataRoute.js');
const authRouter = require("./routes/auth.js");

app.use(express.static('./Methods-Public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/data',dataRouter);
app.use('/login',authRouter);


const server = app.listen(8080,()=>{
    console.log('App is running');
    console.log('Address: ',server.address().address);
    console.log('Port: ',server.address().port);
});