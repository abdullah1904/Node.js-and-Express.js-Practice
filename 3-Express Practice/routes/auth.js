const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    const {name} = req.body;
    if(name){
        res.status(200).send(name);
    }
    return res.status(401).send("Empty Field");
});

module.exports = router;