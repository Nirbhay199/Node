const express=require('express');
const router=express.Router();
const Token=require('../video_call/create_token.controller.js');
const nocache = (_, resp, next) => {
    resp.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    resp.header('Expires', '-1');
    resp.header('Pragma', 'no-cache');
    next();
  }
router.get('/token',nocache,Token.generateRTCToken);
module.exports=router