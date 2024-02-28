const User = require("../modal/user.js");
const Auth = require("/Users/610weblab/Documents/Node/service/auth.js");
const Token = require("/Users/610weblab/Documents/Node/service/token.js");
module.exports = class UserService {
  static async createUser(data) {
    try {
      let user = await User.findOne({ email: data.email });
      if (user) {
        return { success: false, message: "User Already present In Db" };
      } else {
        let password = await Auth.encryptPassword(data.password);
        let newData = {
          name: data.name,
          email: data.email,
          password: password,
        };
        let response = await User(newData).save();
        let response2 = await Token.saveToken(response);
        return {
          success: true,
          message: {
            id: response.id,
            name: response.name,
            email: response.email,
            token: response2.token,
          },
        };
      }
    } catch (_) {
      return _.message;
    }
  }
  static async login(data) {
    let user = await User.findOne({ email: data.email });
    if (!user) {
      return { success: false, message: "User Not present In Db" };
    } else {
      if (!data.password) {
        return { success: false, message: "Enter Valid Password" };
      } else {
        let password = await Auth.decryptPassword(user.password, data.password);
        if (password) {
          let response2 = await Token.saveToken(user);
          return {
            success: true,
            message: {
              id: user.id,
              name: user.name,
              email: user.email,
              token: response2.token,
            },
          };
        } else {
          return { success: false, message: "Enter Correct Password" };
        }
      }
    }
  }
};
