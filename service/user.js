const User = require("/Users/610weblab/Documents/Node/modal/user.js");
const Auth = require("/Users/610weblab/Documents/Node/service/auth.js");
module.exports = class UserService {
  static async createUser(data) {
    let password = await Auth.encryptPassword(data.password);
    try {
      let newData = {
        name: data.name,
        email: data.email,
        password: password,
      };

      let response = await User(newData).save();

      return response;
    } catch (_) {
      return _.message;
    }
  }
  // static async login(data) {
  //   let password = await Auth.decryptPassword(data.password);
  //   try {
  //     let newData = {
  //       name: data.name,
  //       email: data.email,
  //       password: password,
  //     };

  //     let response = await User(newData).save();

  //     return response;
  //   } catch (_) {
  //     return _.message;
  //   }
  // }
};
