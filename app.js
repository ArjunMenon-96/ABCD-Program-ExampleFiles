function display()
{
console.log("hi");
}
//display();

var s=function()
{
    console.log("welcome");
}
//s();

function callfunction(fun)
{
    fun();
}
//callfunction(s);

function sum(a,b)
{
    var res=a+b;
    console.log("sum of" + a+" + " +b+ " is " +res);
}
sum(10,20);