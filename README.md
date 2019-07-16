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
- Interface
```
interface Person{
firstName: string;
lastName: string;
getFullName():string;
}

class Foo implements Person {
firstName: string;
lastName: string;
getFullName():string{
 return this.firstName + this.lastName;
}

}

let aPerson : person = new Foo();

let someObj ={
firstName:"Test",
lastName:"Test",
foo: 10,
getFullName: () => "Test"
}
aPerson = someObj; //correct
aPerson.foo //error
```
- Member Visiblity
No concept of pivate in js but in ts we have. If no access specifier it is treated as public.
we can encapsulate the behavior.

```
class Person{
private firstName: string;
private lastName: string;
greet(){
console.log("Hello There");
}
getFirstName(){
return this.firstName;
}
setFirstName(firstName: string){
this.firstName = firstName;
}
getLastName(){
return this.lastName;
}
setLastName(firstName: string){
this.firstName = firstName;
}
getFullName(){
 return this.firstName + this.lastName;
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
aProgrammer.getFullName();
```
- using constructor Quick way to create private members and constructor.
```
class Person{

constructor(private firstName:string, private lastName: string){

}
greet(){
console.log("Hello There");
}
getFirstName(){
return this.firstName;
}
setFirstName(firstName: string){
this.firstName = firstName;
}
getLastName(){
return this.lastName;
}
setLastName(firstName: string){
this.firstName = firstName;
}
getFullName(){
 return this.firstName + this.lastName;
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
aProgrammer.getFullName();
```
- readonly modifier
```
class Person{
readonly name ="Ishant"
}

// if we want to declare it in cnstructor

readonly name;
constructor(name:string){
this.name=name;
}
```
- enum
```
enum DaysOfTheWeek {
SUN,MON,TUE,WED,THU,FRI,SAT
}
let day: DaysOfTheWeek;
day = DaysOfTheWeek.MON;
if(day === DaysOfTheWeek.MON){
 console.log("I have to go to work");
}
//if we want to give default values
enum DaysOfTheWeek {
SUN= 100,MON,TUE,WED,THU,FRI,SAT
}
//thenn MON is 101 and on.
```

- Generics
```
function echo<T>(arg:T):T{
 return arg;
}
var myStr = echo(1);

//another example

class Person{
private firstName: string;
private lastName: string;
greet(){
console.log("Hello There");
}
getFirstName(){
return this.firstName;
}
setFirstName(firstName: string){
this.firstName = firstName;
}
getLastName(){
return this.lastName;
}
setLastName(firstName: string){
this.firstName = firstName;
}
getFullName(){
 return this.firstName + this.lastName;
}
}
class Admin extends Person{}
class Manager extends Person{}

let admin  = new Admin('a','b');
let manager = mew Manager('a','b');

function personEcho<T>(person: T): T{
return person;
}
// function personEcho<T extends Person>(person: T): T{
//return person;
//}
var foo = personEcho(admin);
```
- Modules
```
//Person Class
export class Person{}
//otherclass which needs to import
import {Person} from './Person'
```
## Running Typescript
- when compiling using tsc we get output file as same name but we can customise it s well using
```
tsc test.ts --out output-script.js
```
- if we want to compilation process continous.
```
tsc test.ts --out output-script.js --watch
tsc -help
```
## using tsconfig.json 
- create the fie in root and contains all the commands here.
- to create a tsconfig file
```
 tsc --init
 //to run
 tsc
```
## creating an npm project
- to create a npm project npm init
- there main shows the starting point of the application
- in script of package.json add start script "tsc && node filename"
