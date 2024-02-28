const User = require("/workspaces/Node/service/user.js");

module.exports = class UserCntr {
  static async createAccount(req, res) {
    try {
      let response = await User.createUser(req.body);
      res.status(200).json(response);
    } catch (_) {
      res.status(500).json(_);
    }
  }
  // static async login(req, res) {
  //   try {
  //     let response = await User.login(req.body);
  //     res.status(200).json(response);
  //   } catch (_) {
  //     res.status(500).json(_);
  //   }
  // }
};
