const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
// app.use(express.static("public"));
const port = 8000;
const cors = require("cors");
const dbconnection = require("./database");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.post("/create", (request, response) => {
  console.log(request);
  var object = {
    Serial_no: request.body. Serial_no,
    date: request.body.date,
    item_name: request.body.item_name,
    quantity:request.body.quantity
  };
  dbconnection.create(object,"textile_industry").then((res)=>{
    if(res){
      response.send(res);
    }
else{
     response.send(err);
}
  })
});
 
app.post("/postquery", (request, response, next) => {
  console.log(request);
  var object = {
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email_id: request.body.email_id,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
    contact_no:request.body.contact_no
  };
 
  
  dbconnection.insert(object);
  console.log("Data added");
});
app.get("/getUser", (request, response) => {
  console.log(request);
  console.log("Fetching Begins");
  dbconnection.get("textile_industry").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.get("/getUserId/:id", (request, response) => {
  dbconnection.getId(request.params.id, "textile_industry").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send("error");
    }
  });
});
app.delete("/delete/:id/:id1", (request, response) => {
   dbconnection
    .del_id(request.params.id, request.params.id1, "textile_industry")
    .then((res) => {
     if (res) {
      response.send(res);
     } else {
      response.send("error");
     }
    });
  });
  
  
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
 
  console.log(`server is listening on http://localhost:${port}`);
});
 