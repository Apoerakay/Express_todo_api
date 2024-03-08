import express  from "express";

//create express app

const app = express();

//define routes
app.get('/', (req, res)=>{
    // console.log(req.query, req.headers );
    res.send("Welcome");
});


app.get('/ping',(req,res)=>{
    res.send("ping Bomb!!!");
});
app.get('/file',(req,res)=>{
    console.log(process.cwd());
    res.sendFile(process.cwd() + "/index.html");
});
//listen for incoming requests

app.listen(4000, ()=>{
    console.log("express app is running!")
});