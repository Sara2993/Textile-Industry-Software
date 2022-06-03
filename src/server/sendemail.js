const nodemail = require('nodemailer');
var sender = nodemail.createTransport({
    service:'gmail',
    auth:{
        user:"sosapp24@gmail.com",
        
        pass:'SOSAPP@24'


    }
})
module.exports.getemail = function(email,inform)
{
  
    var composemail = {
        from:'sosapp24@gmail.com',
        to:email,
        subject:'node email',
        text:inform
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