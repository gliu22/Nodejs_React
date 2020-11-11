import express from 'express';
import config from './config.js';
import fs from 'fs';

import apiRouter from './api/index.js';
const server = express();

server.get('/',(req,res)=>{
    res.send('hello express');
});

server.use('/api',apiRouter);

server.use(express.static('public'));


// server.get('/about.html',(req,res)=>{
//     fs.readFile('./about.html',(err,data)=>{
//         res.send(data.toString());
//     });
// });

server.listen(config.port,()=>{
    console.info('listening....',config.port);
});