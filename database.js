const express = require("express");
const app = express();

// jdbc:mysql://127.0.0.1:3306/?user=root
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root', 
    password:'12345678',
    database:'db1',
    port: 3306
});
connection.connect();

app.get("/query", (req, res)=>{
    connection.query('select * from user2', (err, rows, fields)=>{
        if (err) console.log(err);
        console.log(rows);
        res.json(rows);
    });
});

app.listen(3000, ()=>{
    console.log("Server started");
});