const Token = require('../Modal/token.schema.js')
const jwt = require('jsonwebtoken')
module.exports = class TokenCrt {
    static async generatetoken(data) {
        try {
            let result = jwt.sign(data, process.env.jsonKey);
            Token({ token: result }).save();
            return result;
        } catch (_) {
            console.log(_);
        }
    }
    static async isValidToken(req) {
        let usertoken=req.headers['authorization'].split('Bearer')[1].trim()
        let token = await Token.findOne({ token: usertoken });
        if (token) {
           let result=jwt.verify(usertoken,process.env.jsonKey);
            return {success:true,data:result};
        } else {
            return {success:false};
        }
    }

    static async logOut(req) {
        let usertoken=req.headers['authorization'].split('Bearer')[1].trim()
        await Token.deleteOne({ token: usertoken });
        return true;
       
    }
}
  

