const jsonData = require('../5-Express JSON Basics (Data)').data;

const getData = (req, res) => {
    res.status(200).json({success: true, count: jsonData.length, data: jsonData});
}

const createData = (req,res)=>{
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
}

const createDataPostman = (req,res)=>{
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
}

const updateData = (req,res)=>{
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
}

const deleteData = (req,res)=>{
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
}

module.exports = {getData, createData, createDataPostman, updateData, deleteData};