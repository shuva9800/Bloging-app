const express = require('express');
const app = express();

require("dotenv").config();

//for parsing
app.use(express.json());

const port= process.env.PORT|| 4000;
app.listen(port, ()=>{
    console.log(`server started successfully at ${port}`)
});
//import route for task api
const taskroute = require('./routes/task');


//mount to the API routes
app.use("/api/v1", taskroute);

//connection DB
const dbconnect=require('./config/database');
dbconnect();

//default Route
app.get('/', (req, res)=>{
    res.send(`<h1>successfully exicuted default route ,home page</h1>`)
   })