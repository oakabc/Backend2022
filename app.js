const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send('Hello World!!!');
});

app.get("/my-html", (req, res)=>{
    res.send('<h1>Hello World !</h1>');
});

app.get("/my-json-api", (req, res)=> {
    res.send('{"name":"Chanakarn Kingkaew"}');
});

app.get("/my-json-api2", (req, res)=> {
    res.json({"name":"Chanakarn Kingkaew"});
});

//my-id send student ID
app.get("/my-id", (req, res)=>{
    res.send('6322300149');
});

app.listen(3000, ()=>{
    console.log("Server started on port 3000 !");
});