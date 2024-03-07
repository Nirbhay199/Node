const User = require("../Modal/user.schema.js");
module.exports = class UserService {
  static async signUp(data) {
    try {
      let response = await User(data).save();
      return response;
    } catch (_) {
      console.log(_);
    }
  }

  static async getUserByEmail(email) {
    try {
      let result = User.findOne({ email: email });
      return result;
    } catch (_) {
      console.log(_);
    }
  }

  static async getUserById(id) {
    try {
      let result = User.findOne({_id:id});
      return result;
    } catch (_) {
      console.log(_);
    }
  }

  static async editUser(id,data){
    console.log(data);
    try{
      let result=User.findOneAndUpdate({_id:id},{$set:data},{new:true})
      console.log(result);
      return result;
    }catch(_){
      console.log(_);
    }
  }

  static async fetchUserList(id){
    try{
      let result=User.find({_id:{$ne: id}}); 
      return result; 
    }catch(_){
      console.log(_);
    }
  }

};
