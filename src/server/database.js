const { ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } = require("@angular/core");
const Cloudant = require("@cloudant/cloudant");
let url =
  "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/";
let username = "apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w";
let password = "e455d34a303110b468819fbc14388b5e";
 
let cloudant = Cloudant({ url: url, username: username, password: password });
let insert = function (paramsvalue) {
  console.log(paramsvalue);
  cloudant
    .use("textile_industry")
    .insert(paramsvalue)
    .then((data) => {
      console.log("Data Inserted into Clouddatabase" + data);
    })
    .catch((err) => {
      console.log(err);
    });
};
let create=function(id,dbname,){
  return cloudant.use(dbname).insert(id);
}
let get = function (admindata,dbname) {
  return cloudant.use(dbname).find(admindata);
};
let getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
let del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};


module.exports = { get, getId, insert,del_id,create };
