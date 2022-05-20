const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const cors = require('cors');
const setmail = require('./send');


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
        password:request.body.password,
        
    }
    setmail.getemail(request.body.email_id);
    console.log(object);
})
  app.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err);
    }
  
    console.log(`server is listening on http://localhost:${port}`);
  });