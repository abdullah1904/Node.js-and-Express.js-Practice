const express = require('express');
const path = require('path');

const app = express();

// Setup static and middleware
// Static is a file that server doesn't have to change it
app.use(express.static('./public'));

app.get('/',(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,'./index.html'));
});

app.all('*',(req,res)=>{
    res.status(404).send("404 - Resource Not Found");
})

app.listen(8080,()=>{
    console.log('App is running on 8080 Port');
});