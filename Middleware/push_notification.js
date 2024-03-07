var FCM = require('fcm-push');
var fcm = new FCM(process.env.serverKey);
module.exports=class PushNotification{
static async sendPush(data,fcm_token){
    // console.log("jhfdjhfj---"+fcm_token);
    var message = {
        to: fcm_token, 
        data: data,
    };
    fcm.send(message)
    .then(function(response){
        console.log("Successfully sent with response: ", response);
    })
    .catch(function(err){
        console.log("Something has gone wrong!");
        console.error(err);
    })
}

}

