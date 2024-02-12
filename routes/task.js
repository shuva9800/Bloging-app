const express= require('express');
const router =express.Router();


//import controllers

const {commentsController} = require('../controllers/commentsController');
const {postController,getAllpost}= require('../controllers/postController');
const {likepost,notLike} =require('../controllers/likeController');


//map path with controller
router.post('/comments/create', commentsController);
router.post('/posts/create',postController);
router.get('/posts', getAllpost);
router.post('/likes/like',likepost);
router.post('/likes/unlike',notLike);
//export routes
module.exports = router;