const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');
const setmail = require('./sendemail');


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(
    cors({
        origin:'http://localhost:4200'
    })
)

app.get('/', function (request, response) {
    response.json({"name":"saraswathi"});
  });

  app.post('/mail',(request,response,next)=>{
    console.log('hai hello!!');
   
    var object ={
        email_id:request.body.email_id,
        message:request.body.message,
        
    }
    setmail.getemail(request.body.message);
    console.log(object);
})
  app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  });