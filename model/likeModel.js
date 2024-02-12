const mongoose =require('mongoose');

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:"string",
        required:true,
    },
});
module.exports= mongoose.model("Like", likeSchema);