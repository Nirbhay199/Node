const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-token')
const PushNotification=require("../Middleware/push_notification.js");
module.exports=class CreateToken{
    static async generateRTCToken(data,fcm) {
        // Rtc Examples
        let appID = process.env.APP_ID;
        let appCertificate =  process.env.APP_CERTIFICATE; 
        let role = RtcRole.PUBLISHER;
              // let uid = parseInt(req.query.uid);
        // const account = req.query._id;
        let account = "";
        let expirationTimeInSeconds = 72600
        let currentTimestamp = Math.floor(Date.now() / 1000)
        let privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds

        // IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.

        // // Build token with uid
        // let token = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channelName, uid, role, privilegeExpiredTs);

        // // Build token with user account
        const token = RtcTokenBuilder.buildTokenWithUserAccount(appID, appCertificate, data.email, account, role, privilegeExpiredTs);
        if(token!=null){
            var data = {
               type:"CALLING_NOTIFICATION",
               title: 'Title of your push notification',
               app_id:process.env.APP_ID,
               channel:data.email,
               token:token,
               person_calling_name:data.name,
               person_calling_profile:"",
            }; 
            PushNotification.sendPush(data,fcm)
        }
        // console.log("Token With UserAccount: " + tokenB);
         return token
    };
}