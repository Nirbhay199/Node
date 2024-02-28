const Auth = require("/Users/610weblab/Documents/Node/service/auth.js");
const Token = require("/Users/610weblab/Documents/Node/modal/token.js");
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
