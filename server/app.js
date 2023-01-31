require('dotenv').config();
const express = require('express');
const app = express();
require('./DB/conn');
const users = require('./models/userSchema');
const apiCors = require ('cors');
const router = require('./routes/router');
const port = 8003;
app.use(apiCors());
app.use(express.json());
// api pages 
app.use(router);
app.listen(port,()=>{
    console.log(`Server is started , port number is ${port}`);
}) 