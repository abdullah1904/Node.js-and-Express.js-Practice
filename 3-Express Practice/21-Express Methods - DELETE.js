const express = require('express');
const jsonData = require('./5-Express JSON Basics (Data)').data;

const app = express();

app.use(express.static('./Methods-Public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get('/api/data',(req,res)=>{
    res.status(200).json({
        success:true,
        count: jsonData.length,
        data:jsonData
    });
});

app.post('/api/data',(req,res)=>{
    const {name:sendName}=req.body;
    if(sendName){
        res.status(201).send({
            success: true,
            data: [...jsonData,{id:jsonData.length+1,name:sendName,age:20,occupation:"Developer"}]
        });
    }
    return res.status(401).json({
        success: false,
        message: "Empty Field"
    });
});

app.post('/api/postman',(req,res)=>{
    const {name} = req.body;
    if(name){
        res.status(201).send({
            success: true,
            data: [...jsonData,{id:jsonData.length+1,name:sendName,age:20,occupation:"Developer"}]
        });
    }
    return res.status(401).json({
        success: false,
        message: "Empty Field"
    });
});

app.put('/api/data/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const person = jsonData.filter((person)=>person.id === Number(id));
    person.map((p)=>p.name = name);
    if(person.length < 1){
        return res.status(404).json({
            success: false,
            message: "Person Not Found"
        });
    }
    res.status(201).json({
        status:true,
        data: person
    });
});

app.delete('/api/data/:id',(req,res)=>{
    const person = jsonData.filter((person)=>person.id === Number(req.params.id));
    if(person.length < 1){
        return res.status(404).json({
            success: false,
            message: "Person Not Found"
        });
    }
    const newData = jsonData.filter((p)=>p.id !== Number(req.params.id));
    return res.status(201).json({
        status:true,
        data: [...newData]
    });
});

app.post('/login',(req,res)=>{
    const {name} = req.body;
    if(name){
        res.status(200).send(name);
    }
    return res.status(401).send("Empty Field");
});

const server = app.listen(8080,()=>{
    console.log(server.address().address);
    console.log(server.address().port);
    console.log('App is running on port 8080');
});