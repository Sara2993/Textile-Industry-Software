const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
// app.use(express.static("public"));
const port = 8000;
const winlogger=require('./logger/logger');
const cors = require("cors");
const dbconnection = require("./database");
const { request } = require("http");
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
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email_id: request.body.email_id,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
    contact_no:request.body.contact_no,
    type:"user",
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
// app.get("/get_all_query/:id", (request, response) => {
//   console.log('get id', request.params.id);
//   var fetchdata = {
//     selector: {
//       id: request.params.id,
//     },
//   };
//    dbconnection.foodchain.find(fetchdata).then((res) => {
//      if (res) {
//     console.log(res);
//      response.json(res);
//      } else {
//      response.send("error");
//      }
//      });
    
    
//    console.log("end");
//   });
  
  
 
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
  var data={
    selector:{
      type:"user",
    }
  }
  console.log("Fetching Begins");
  dbconnection.get(data,"textile_industry").then((res) => {
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
  // --------------------------meterials-----------------------------------//
  app.post("/createmat", (request, response, next) => {
    console.log(request);
    var object = {
      Serial_no: request.body. Serial_no,
      Pro_ID: request.body.Pro_ID,
      Pro_name: request.body.Pro_name,
      sup_ID:request.body.sup_ID,
      sup_name:request.body.sup_name,
      quantity:request.body.quantity,
      Cost:request.body.Cost,
      type:"meterial"
    };
   
    
    dbconnection.insert(object,"textile_industry").then((res)=>{
      if(res){
        response.send(res);
      }
  else{
       response.send(err);
    console.log("Data added");

  }
    });
    console.log("Data added");
  });
  app.get("/meterial",(request,response)=>{
    console.log(request);
    var data={
      selector:{
        type:"meterial"
      }
    }
    dbconnection.get(data,"textile_industry").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  })
  app.get("/materialId/:id", (request, response) => {
    dbconnection.getId(request.params.id, "textile_industry").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  app.delete("/delete/:id:id1", (request, response) => {
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
  //------------------------suppliers--------------------------------------------// 
  app.post("/createsup", (request, response, next) => {
    console.log(request);
    var object = {
      Serial_id: request.body. Serial_id,
      name: request.body.name,
      contact: request.body.contact,
      email_id:request.body.email_id,
      aadhar:request.body.aadhar,
      city:request.body.city,
      state:request.body.State,
      type:"supplier"
    };
   
    
    dbconnection.insert(object,"textile_industry").then((res)=>{
      if(res){
        response.send(res);
      }
  else{
       response.send(err);
    console.log("Data added");

  }
    })
  
  });
  app.get("/getsup", (request, response) => {
    console.log(request);
    var data={
      selector:{
        type:"supplier",
      }
    }
    dbconnection.get(data,"textile_industry").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  app.get("/subqueryID/:id", (request, response) => {
    dbconnection.getId(request.params.id, "textile_industry").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  app.delete("/clear/:id/:id1", (request, response) => {
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
  winlogger.info("SUCCESS", "Server is running!!!");
 
  console.log(`server is listening on http://localhost:${port}`);
});

 