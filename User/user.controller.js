const User = require("../User/user.service.js");
const Token = require("../Middleware/token.js");
const Functions = require("../Middleware/common.js");
const { response } = require("express");
module.exports = class UserCrt {
  static async signUp(req, res) {
    try {
      let email = req.body.email;
      let password = req.body.password;
      if (email) {
        let result = await User.getUserByEmail(email);
        if (!result) {
          if (password) {
            let newpassword = Functions.encryptPassword(password);
            let userData = {
              name: req.body.name,
              email: email,
              password: newpassword,
            };
            let response = await User.signUp(userData);
            let token = await Token.generatetoken({
              id: response._id,
              name: req.body.name,
              email: email,
              password: newpassword,
            });
            res
              .status(200)
              .json({
                success: true,
                message: "User Created",
                data: response,
                token: token,
              });
          } else {
            res
              .status(422)
              .json({ success: false, message: "Enter a Valid Password" });
          }
        } else {
          res
            .status(422)
            .json({ success: false, message: "Email Already Exist" });
        }
      } else {
        res.status(400).json({
          success: false,
          message: "Not Able to Create User Check Your Email",
        });
      }
    } catch (_) {
      res
        .status(500)
        .json({ success: false, message: `Inernal Server Error\n ${_}` });
    }
  }
  static async login(req, res) {
    try {
      let email = req.body.email;
      let password = req.body.password;
      if (email) {
        let response = await User.getUserByEmail(email);
        if (response) {
          let valid = Functions.decryptPassword(response.password, password);
          if (valid) {
            let userData = {
              id: response._id,
              name: response.name,
              email: email,
              password: response.password,
            };
            let token = await Token.generatetoken(userData);
            console.token;
            res
              .status(200)
              .json({
                success: true,
                message: "User Login",
                data: response,
                token: token,
              });
          } else {
            res.status(422).json({
              success: false,
              message: "Enter Correct Password",
            });
          }
        } else {
          res.status(422).json({
            success: false,
            message: "Email is not Registered with us",
          });
        }
      } else {
        res.status(400).json({ success: false, message: "Email is not valid" });
      }
    } catch (_) {
      res
        .status(500)
        .json({ success: false, message: `Inernal Server Error\n ${_}` });
    }
  }
  static async getUserDetail(req, res) {
    try {
      let result = await Token.isValidToken(req);
      if (result.success) {
        let id = result.data.id;

        let response = await User.getUserById(id);
        console.log(response);
        if (response) {
          res
            .status(200)
            .json({ success: true, message: "User Verify", data: response });
        } else {
          res
            .status(400)
            .json({
              success: false,
              message: "Token not present maybe its deleted",
            });
        }
      } else {
        res.status(400).json({ success: false, message: "Invalid Token" });
      }
    } catch (_) {
        res.status(500).json({success:false,message:`Internal Server Error\n${_}`});
    }
  }
  static async editUser(req,res){
    try{
     if(!req.body.password){
        let result = await Token.isValidToken(req);
        if(result.success){
            let id =result.data.id;
            let response=await User.editUser(id,req.body);
            res.status(200).json({success:true,message:"user data update",response})
        }else{
            res.status(422).json({success:false,message:`Invalid User`});  
        }
     }else{
        res.status(422).json({success:false,message:`Using Invalid Query`});  
     }
    }catch(_){
        res.status(500).json({success:false,message:`Internal Server Error\n${_}`});

    }
  }
  static async logOut(req,res){
    try {
        let result = await Token.logOut(req);
        if (result) {
            res
            .status(200)
            .json({ success: true, message: "User LogOut"});
        } else {
          res.status(400).json({ success: false, message: "Invalid Token" });
        }
      } catch (_) {
          res.status(500).json({success:false,message:`Internal Server Error\n${_}`});
      }
  }
};
