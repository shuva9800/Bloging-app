const mongoose =require('mongoose');

const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:"string",
        required:true,
    },

    body:{
        type:"string",
        required:true
    }
});

module.exports = mongoose.model("Comment", commentSchema)