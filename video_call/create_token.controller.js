const CreateToken=require('../video_call/video_call.service.js');
const Token=require('../Middleware/token.js');
module.exports = class VideoCall {
    static async generateRTCToken(req, res) {
        let id=req.query.id;
        if(id){
            let result=await Token.getData(id);
            let channel = await Token.isValidToken(req);
            if(channel.success){
                let token =await CreateToken.generateRTCToken(channel.data,result.fcm)
                res.status(200).json({success:true,app_id:process.env.APP_ID,channel:channel.data.email,token:token});
               }else{
                res.status(422).json({success:false,message:"Invalid Token"});
               }
        }else{
            res.status(422).json({success:false,message:"provide user_id you want to call"});
        }
    };

}