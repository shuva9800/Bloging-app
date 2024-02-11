const express= require('express');
const router =express.Router();


//import controllers

const {dummyPage} =require('../controllers/dummy');
const {fetchData}= require('../controllers/fetchData')

//map path with controller
router.get("/dummy", dummyPage);
router.get('/posts', fetchData);


//export routes
module.exports = router;