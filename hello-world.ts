var fn = () => 'response';

//to declare the type

var a:number;
var b:boolean;
var c: string;
var myarray:number[];

a = 10;
b = true;
c = "hello";
myarray =[1,2,3]

// var arr =[1,'str',true];
//tuple
var arr :[number,string,boolean];
arr =[1,'str',true];
//a = "hello"(error)

function add(a:number,b:number){
    return a+b;
}
console.log(add(4,4));

//optional arguments
function addOpt(a:string,b,c?){
    return a+b;
}
console.log(addOpt("dd",4,5));