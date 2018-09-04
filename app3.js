var x = require("./app2");
var sum = require("./app2");
var mul = require("./app2.mul");
var div = require("./app2.div");
function avg(a,b)

{  
   
    var s=sum(a,b);  
    console.log("average:" + s/2);

}

avg(34,78);
mul(10,2);
div(20,10);