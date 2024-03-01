const User=require("../User/user.controller.js");
const express=require('express');
const router =express.Router();
router.post('/sign_up',User.signUp);
router.post('/login',User.login);
router.get('/detail',User.getUserDetail);
router.put('/detail/edit',User.editUser);
router.delete('/logout',User.logOut);
module.exports=router;