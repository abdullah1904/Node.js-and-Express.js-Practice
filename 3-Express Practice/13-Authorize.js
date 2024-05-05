const authorize = (req,res,next)=>{
    const {user} = req.query;
    if(user === "abdullah"){
        req.user = {name: "Abdullah",id:525};
        next();
    }
    else{
        res.status(401).send("Unauthorize")
    }
}

module.exports = authorize;