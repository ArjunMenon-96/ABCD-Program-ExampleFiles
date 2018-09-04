var fs = require("fs");

var contents = fs.readFileSync("data.json");
var jsonContent = JSON.parse(contents);

console.log("user name:", jsonContent.username);
console.log("email:", jsonContent.email);
console.log("password:", jsonContent.password);
