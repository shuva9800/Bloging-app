const comment =require('../model/commentMode');
const post = require('../model/postModel');


exports.commentsController = async (req,res)=>{
    try{
       const {user, body,post} = req.body;
       // 1st way to insert dat into db
        // const values =await comment.create({user, body,post});

        // 2nd way to insert data ino db
        // at first create object 
        const commentvalue= new commentvalue({user, body,post});
        const value= await commentvalue.save();


        res.status(200).json({
            success: true,
            data:values,
            message: "comment inserted into the DB successfully"
        })

    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            error:error.message,
            message: "server error"
        })

    }
}