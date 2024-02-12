const Post= require('../model/postModel');
const like= require('../model/likeModel');

//like a post
exports.likepost= async (req,res)=>{
   try{
    const {post,user}= req.body;
    const values = await like.create({post,user});

     const updatedLike =await Post.findByIdAndUpdate(post, {$push: {likes: values._id}},{new: true})
                    .populate("likes")
                    .exec();
    res.status(200).json({
        success:true,
        data:values,
        message: "like created successfully"
    })
   }
   catch(error){
    console.log(error);
    res.status(500).json({
        success: false,
        error:error.message,
        message: "like widthroll not created due to server error"
    })

}
}

exports.notLike = async (req,res)=>{
    try{
     const {post,user}= req.body;
     const values = await like.findByIdAndDelete({_id:user});
 
      const updatedLike =await Post.findByIdAndUpdate(post, {$pull: {likes: values._id}},{new: true});
     res.status(200).json({
        success:true,
        data:values,
        message: "unlike  successfully"
     })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            success: false,
            error:error.message,
            message: "like widthroll not occure due to server error"
        })

    }
 }