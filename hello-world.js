var fn = function () { return 'response'; };
//to declare the type
var a;
var b;
var c;
var myarray;
a = 10;
b = true;
c = "hello";
myarray = [1, 2, 3];
// var arr =[1,'str',true];
//tuple
var arr;
arr = [1, 'str', true];
//a = "hello"(error)
function add(a, b) {
    return a + b;
}
console.log(add(4, 4));
//optional arguments
function addOpt(a, b, c) {
    return a + b;
}
console.log(addOpt("dd", 4, 5));
