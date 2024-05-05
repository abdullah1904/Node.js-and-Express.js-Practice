const app = require('express')();

app.get('/',(req,res)=>{
    res.status(200).send('Home Page');
});

app.get('/about',(req,res)=>{
    res.status(200).send('About Page');
});

app.all('*',(req,res)=>{
    res.status(404).send("404 Not Found");
});

app.listen(8080,()=>{
    console.log("App is Running");
});

// Methods
// app.get();
// app.post();
// app.put();
// app.delete();
// app.all(); -> Use for 404
// app.use(); -> Use for Middleware
// app.listen();