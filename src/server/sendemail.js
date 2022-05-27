const nodemail = require('nodemailer');
var sender = nodemail.createTransport({
    service:'gmail',
    auth:{
        email_id:'textileindustry242@gmail.com',
        message:'My Cotton Thread is running Out of Stock so send me the available stock'
    }
})
module.exports.getemail = function(params)
{
  
    var composemail = {
        from:'textileindustry242@gmail.com',
        to:params,
        subject:'node email',
        text:'My Cotton Thread is running Out of Stock so send me the available stock'
    }
    sender.sendMail(composemail,function(err,res){
        if(err)
        {
            console.log("Mail not sent",err);
        }
        else{
            console.log("Mail sent",res);
        }
    })
}