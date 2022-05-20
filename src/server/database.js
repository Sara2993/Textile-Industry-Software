const { ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } = require("@angular/core");
const Cloudant = require("@cloudant/cloudant");
var url =
  "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud/";
var username = "apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w";
var password = "e455d34a303110b468819fbc14388b5e";
 
var cloudant = Cloudant({ url: url, username: username, password: password });
 

 
insert = function (paramsvalue) {
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
create=function(id,dbname,){
  return cloudant.use(dbname).insert(id);
}
get = function (dbname) {
  return cloudant.use(dbname).list();
};
getId = function (id, dbname) {
  return cloudant.use(dbname).get(id);
};
del_id = function (id, id1, dbname) {
  return cloudant.use(dbname).destroy(id, id1);
};

module.exports = { get, getId, insert,del_id,create,mail };
