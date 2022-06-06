const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 8000;
const winlogger=require('./logger/logger');
const cors = require("cors");
const dbconnection = require("./database");
const mail=require("./sendemail")
const { request } = require("http");
app.use(connection.static("public"));
app.use(bodyparser.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
app.post("/create", (_request, response) => {
  console.log(request);
  let object = {
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
 
app.post("/postquery", (_request, _response, _next) => {
  console.log(request);
  let object = {
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email_id: request.body.email_id,
    password: request.body.password,
    confirm_password: request.body.confirm_password,
    contact_no:request.body.contact_no,
    type:'user',
  };
 
  
  dbconnection.insert(object);
  console.log("Data added");
});
app.get("/getUser", (_request, response) => {
  console.log(request);
  let data={
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

app.delete("/delete/:id/:id1", (_request, response) => {
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
  // -------------------------stock-maintain--------------------------------//
  app.post("/createsto", (_request, response) => {
    console.log(request);
    let object = {
      Serial_no: request.body. Serial_no,
      date: request.body.date,
      item_name: request.body.item_name,
      quantity: request.body. quantity,
      type:"stock-maintain",
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
  app.get("/getsto", (_request, response) => {
    console.log(request);
    let data={
      selector:{
        type:"stock-maintain",
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
  app.delete("/delete/:id:id1", (_request, response) => {
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
  app.post("/createmat", (_request, response, _next) => {
    console.log(request);
    let object = {
      Serial_no: request.body. Serial_no,
      Pro_ID: request.body.Pro_ID,
      Pro_type: request.body.Pro_type,
      sup_ID:request.body.sup_ID,
      sup_name:request.body.sup_name,
      quantity:request.body.quantity,
      Cost:request.body.Cost,
      key:request.body.key,
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
  app.get("/meterial",(_request,response)=>{
    console.log(request);
    let data={
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
  app.get("/materialId/:id", (_request, response) => {
    dbconnection.getId(request.params.id, "textile_industry").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  app.delete("/delete/:id:id1", (_request, response) => {
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
  app.post("/createsup", (_request, response, _next) => {
    console.log(request);
    let object = {
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
  app.get("/getsup", (_request, response) => {
    console.log(request);
    let data={
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
  app.get("/subqueryID/:id", (_request, response) => {
    dbconnection.getId(request.params.id, "textile_industry").then((res) => {
      if (res) {
        response.send(res);
      } else {
        response.send("error");
      }
    });
  });
  app.delete("/clear/:id/:id1", (_request, response) => {
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
// ---------------------------------------mail--------------------------------------
app.post('/post_msg', (_request, response) => {
  let object = {
    
    email: request.body.email,
   
    message: request.body.message,

    type : "contact"
  };
  dbconnection.insert(object,"textile-industry").then((res) => {
    if (res) {

      response.send(res);
    } else {
      response.send('error');
    }
  });
  console.log('Data added');
});
app.get('/get_msg', (_request, response) => {
  console.log('start');
  let data={
    selector:{
      type:"contact",
    }
  }

  dbconnection.get(data,"textile_industry").then((res) => {
    if (res) {
      response.send(res);
    } else {
      response.send('error');
    }
  });
});

app.post('/mail', (_request, _response) => {
  console.log("******hi");
  console.log(request.body.message);
  mail.getemail(request.body.email,request.body.message)

  console.log('Data added');
});

  


app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  winlogger.info("SUCCESS", "Server is running!!!");
 
  console.log(`server is listening on http://localhost:${port}`);
});

 