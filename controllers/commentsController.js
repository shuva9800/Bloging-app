const comment =require('../model/commentMode');
const Post = require('../model/postModel');


exports.commentsController = async (req,res)=>{
    try{
       const {post,user, body} = req.body;
       // 1st way to insert dat into db
        const values =await comment.create({user, body,post});

        // 2nd way to insert data ino db
        // at first create object 
        // const commentvalue= new commentvalue({post,user, body});
        // const values= await commentvalue.save();
        // find the post by ID and insert it to the post's comments array
        const updatedPost= await Post.findByIdAndUpdate(post, {$push: {comments:values._id}},{new:true})
               .populate("comments")  // populate the comments array with comments documents
               .exec();


        res.status(200).json({
            success: true,
            data:updatedPost,
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