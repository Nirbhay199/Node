const User = require("../service/user.js");
module.exports = class UserCntr {
  static async createAccount(req, res) {
    try {
      // console.log(req.body);
      let response = await User.createUser(req.body);
      if (response.success) {
        res.status(200).json(response);
      } else {
        res.status(422).json(response);
      }
    } catch (_) {
      res.status(500).json(_);
    }
  }
  static async login(req, res) {
    try {
      let response = await User.login(req.body);
      if (response.success) {
        res.status(200).json(response);
      } else {
        res.status(422).json(response);
      }
    } catch (_) {
      res.status(500).json(_);
    }
  }

  // static async 


};
