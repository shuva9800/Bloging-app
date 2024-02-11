const mongoose = require('mongoose');

require("dotenv").config();

const dbconnect= ()=>{
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {console.log("Connection Successful")})
    .catch( (error) => {console.log("Recieved an error" + error)} );
}
module.exports = dbconnect;