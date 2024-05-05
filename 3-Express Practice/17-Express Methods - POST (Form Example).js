const express = require('express');
const jsonData = require('./5-Express JSON Basics (Data)');

const app = express();

app.use(express.static('./Methods-Public'));
app.use(express.urlencoded({extended:false}));

app.get('/api/data',(req,res)=>{
    res.status(200).json({
        success:true,
        count: jsonData.data.length,
        data:jsonData.data
    });
});

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name){
        res.status(200).send(name);
    }
    return res.status(401).send("Empty Field");
});

app.listen(8080,()=>{
    console.log('App is running on port 8080');
});