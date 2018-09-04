var fs =require('fs');

fs.readFile("mytxt.txt",function(err,data){
if(err)
{
    console.log("!!!Sorry!!!");
}
else{
    console.log(data.toString());
}
})


fs.writeFile("mytxt.txt","files updating",function(err,data)
{
    if (err)
    { console.log("sorry");
    }
else{
    console.log(data.json);
}
})

fs.readFile()