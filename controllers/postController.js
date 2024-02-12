const post = require('../model/postModel');



exports.postController = async (req, res)=>{
    try{
        const{user,title,body}= req.body;
        const values = await post.create({user,title,body});

        res.status(200).json({
            success: true,
            data:values,
            message: "post created sauccessfully"
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            error:error.message,
            message: "post not created due to server error"
        })

    }
}

exports.getAllpost = async (req,res)=>{
    try{
        const responce =await post.find().populate("likes").populate("comments").exec();

        res.status(200).json({
            success: true,
            data: responce,
            message: "data fetched successfullu"
        })
    }
    catch(error){
        res.status(500).json({
            success: false,
            error: error.message,
            message: "error in server"
        })

    }
}