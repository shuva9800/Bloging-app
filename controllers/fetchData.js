const post= require('../model/postModel');


exports.fetchData = async (req,res)=>{
    try{
        const responce =await post.find({});

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