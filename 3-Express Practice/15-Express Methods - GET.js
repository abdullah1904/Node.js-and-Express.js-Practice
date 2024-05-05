const express = require('express');
const jsonData = require('./5-Express JSON Basics (Data)');

const app = express();

app.get('/api/data',(req,res)=>{
    res.status(200).json({
        success:true,
        count: jsonData.data.length,
        data:jsonData.data
    });
});

app.listen(8080,()=>{
    console.log('App is running on port 8080');
});