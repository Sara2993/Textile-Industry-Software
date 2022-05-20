const connection = require("express");
const bodyparser = require("body-parser");
const app = connection();
const port = 800;
const Cloudant = require("@cloudant/cloudant");
var url =
  "https://a7e75d33-40d2-47a6-a9b9-f80dbbc41c98-bluemix.cloudantnosqldb.appdomain.cloud";
var username = "apikey-v2-ijzqz68xo4ar5nrlcenfueq1cy3mgg675nzk8td8x9w";
var password = "e455d34a303110b468819fbc14388b5e";
var Documents = {};
const file = require("fs");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
const { response } = require("express");
var urlParser = bodyparser.urlencoded({ extended: false });
app.use(connection.static("public"));
app.get("/dashboard", function (request, response) {
  response.json({ name: "Saraswathi" });
});
app.listen(port, (err) => {
  if (err) {
    return console.log("something bad happened", err);
  }
  console.log(`server is listening on http://localhost:${port}`);
});
var cloudant = Cloudant({ url: url, username: username, password: password });
cloudant
  .use("textile_industry")
  .insert({ name: ";Saraswathi", id: "100" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });