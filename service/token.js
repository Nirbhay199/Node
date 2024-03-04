const Auth = require("../service/auth.js");
const Token = require("../modal/token.js");
module.exports = class TokenService {
  static async saveToken(data) {
    let jwtToken = await Auth.token(data);
    try {
      let a = { token: jwtToken };
      console.log(a);
      let response = Token(a).save();
      return response;
    } catch (_) {
      console.log(_);
    }
  }
};
