function sum(a,b)
{
    console.log("sum :"+ (a+b));
 return a+b;
}


function mul(a,b)
{
    console.log("PRODUCT :"+ a*b);
} 
function div(a,b)
{
    console.log("division :"+ a/b);
}
function avg(a,b)
{
    var s=sum(a,b);   
    console.log(s);
    console.log("average :"+ s/2);

}
module.exports=sum;
module.exports.mul=mul;
module.exports.div=div;