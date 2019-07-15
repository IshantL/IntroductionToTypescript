# Introduction To Typescript

## Why Typescript
There are some problems with JavaScript 
- there is no strong type checking available in js
- we can add properties inthobject on fly
- we can assisgn the same variable as number, string, objects etc.

## How Typescript works

- As the browser only understand the JS
- We can use compilation process i.e anylanguage(typescript) -> Compiler/transpiler -> JS file 
- it is on development time

## Typescript vs javascript
- Typrscript -> JS + types (and some other stuffs)
- we can use es6 in typescript , as es6 may be not use in all browsers but typescript convert from ts to js, we can use mordern syntax inside it.
- makes building these complex apps more managable.

## Setup 
- VS Code
- Node js (to convert from ts to js and to run js)
- npm install -g install typescript

## to run the ts file
 - $tsc "file name"

## Notes
- even if there is an error in typescript it gets convert to js file
- the number of argumnets needs to match in function
- we can give default value as argument in function by a = 0
- we can have optional value as a? also the typr checking as a?:number
- the return type can also be specified as
```
function addOpt(a:number,b:number,c?:number):number{
    return a+b;
}
```
- if we don't explicitely declare a variable type, but you assign a value with the declaration , Typescript implicitely assumes the type from the value being assigned.
- implicit typing will not work if variable assignment is in different lines.

## any type
- if we want to use any type for  variable in typescript then we can use 
```
var a: any;
a = 10;
a = "hhh"
a = true;
```
- if we have to use two data types options (unions types)
```
var a :number | boolean; 
```
## OOPS in Typescript
```
class Person{
firstName: string;
lastName: string;
}

var aPerson = new Person();
aPerson.firstName = "ishant";
console.log(aPerson);
```
- Methods and constructors
```
class Person{
firstName:string;
lastName: string;

constructor(){
this.firstName = "";
this.lastName= "";
}

getFullName(){
 return this.firstName +''+this.lastName;
}
}
var aPerson = new Person();
aperson.firstName = "Ishant";
aperson.lastName = "Lambhate";
console.log(aperson.getFullName());

```
- parameterised constructor
```
class Person{
firstName:string;
lastName: string;

constructor(firstName : string, lastName: string){
this.firstName = firstName;
this.lastName= lastName;
}

getFullName(){
 return this.firstName +''+this.lastName;
}
}
var aPerson = new Person("Ishant","Lambhate");
console.log(aperson.getFullName());
```
- Inheritance

```
class Person{
firstName: string;
lastName: string;
greet(){
console.log("Hello There");
}
}
class Programer extends Person{
greet(){
console.log("hello world");
}
}

var aProgrammer = new Programer();
aProgrammer.greet();

```
- using super keyword

```
class Person{
firstName: string;
lastName: string;
greet(){
console.log("Hello There");
}
}
class Programer extends Person{
greet(){
console.log("hello world");
}
greetLikeNormalPpl(){
super.greet();
}
}

var aProgrammer = new Programer();
aProgrammer.greetLikeNormalPpl();

```
- Polymorphism


```
class Person{
firstName: string;
lastName: string;
greet(){
console.log("Hello There");
}
}
class Programer extends Person{
greet(){
console.log("hello world");
}
greetLikeNormalPpl(){
super.greet();
}
}

var aProgrammer: Person = new Programer();
aProgrammer.greet();
```
