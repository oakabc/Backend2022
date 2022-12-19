const express = require('express');
let fs = require('fs'); // File System 

fs.writeFile('demofile1.txt', 'Hello World!', 'utf8', (err) => {
   if (!err) console.log("write complete !!");

     fs.readFile('demofile1.txt', 'utf8', (err, data) => {
        if (!err) console.log(data);
        else console.log(err);
    } );

} );

