// ES6 Essentials


// let
// let limit = 100;
// limit = 200;
//


// const
// const limit = 200;
// limit = 100; //error

// const emails = ['frodo@email.com', 'samwise@example.com', 'merry@example.com'];
// emails.push('pippin@example.com'); // valid!

// var limit = 200;
// {
//   var limit = 10;
// }


// let limit = 200;
// {
//   let limit = 10;
//   console.log('local', limit);
// }
// console.log('global', limit);

// function hello() {
//   let message = "Hello!";
//   console.log(message);
// }
//
// function greeting() {
//   let message = "How are you?";
//   console.log(message);
// }
//
// hello()
// greeting()
//



// Template Literals
// let a = `good`;
// console.log(a);

// let greeting = `${a} morning`;
// console.log(greeting);

// let greeting = a + " morning";
// console.log(greeting);


// Spread Operator
// let a = [20, 30, 40];
// // let b = [10, 50];
// let b = [10, ...a, 50]

// let a = ['Dana', 'Erik', 'Frank'];
// let b = ['Alice', 'Bob', 'Carl', ...a];


// Rest operator
// function collect(...a) {
//   console.log(a);
// }

// function collect(arg1, ...a, arg2) {
//   console.log(a);  // error
// }


// Destructuring Assignment
let z = [4, 5, 6];
// let four = z[0];
// let five = z[1];
// let [four,, five] = z;


// let king = { name: 'Mufasa', kids: 1 };
// let { name, kids } = king;
//

// let options = {
//   title: "Menu",
//   width: 300
// };
//
// function showMenu(
//   {title,
//     width:w=100,
//     height:h =200}
//   ){
//   console.log(`title: ${title}, ${w}, ${h}`)
// }
//
// showMenu(options)


// function showMenu({
//                     title="Title Name",
//                     width:w=100,
//                     height:h=200
// } = {}) {
//   console.log(`${title} ${ w } ${h}`);
// }
//
// showMenu();


// Arrow Functions

// function cheer() {
//   console.log("Woohoo!")
// }
//
// var cheer = function() {
//   console.log("Woohoo!")
// }

// setTimeout(()=> {
//   console.log("Woohoo!")
// }, 3000)

// let cheer = () => {
//   console.log("Woohoo!");
// }
//
// cheer()


// Функции-стрелки не имеют своего arguments
// function f() {
//   let showArg = () => alert(arguments[0]);
//   showArg();
// }
// f(1)


// let cheer = n => {
//   return n+1
// }
//
// let cheer = n => n+1
//

// Map and Filter Method
// var numbers = [1, 4, 9];
//
// var doubles = numbers.map(
//   function(currentValue, index, array) {
//   return currentValue * 2;
// }, thisArg = void(0) );


// let values = [20, 30, 40];
// let double = (n) => {
//   return n*2;
// }
// let doubled = values.map(double);

// let doubled = values.map(n => n*2);


// let points = [7, 16, 21, 4, 3, 22, 5];
// let highScores = points.filter(n => n > 15);
//


// String Helper Methods
// let b = "wooh" + "oo".repeat(50);
// let b = "wooh" + " ".repeat(50) + "oo";

// console.log("butterfly".startsWith("butter"));
// console.log("butterfly".startsWith("fly")); // false
// console.log("butterfly".endsWith("fly")); // true
// console.log("butterfly".includes("fly")); // true
// console.log("butterfly".includes("butter")); // true
// console.log("butterfly".includes("caterpillar")); // false


// Checking Numbers

// const addToCart = (item, number) => {
//   return Number.isFinite(number)
// }
// console.log(addToCart('shirt', 5)); //true
// console.log(addToCart('shirt', Infinity)); //false
// console.log(addToCart('shirt', Math.pow(2, 54)));

// const addToCart = (item, number) => {
//   return Number.isSafeInteger(number)
// }
// console.log(addToCart('shirt', Math.pow(2, 53)-1));

//
// console.log(Math.pow(2, 53)-1)
// console.log(Math.pow(2, 53))
// console.log(Math.pow(2, 53)+1)
// console.log(Math.pow(2, 53)+2)
// console.log(Math.pow(2, 53)+3)
// console.log(Math.pow(2, 53)+4)

// Безопасные целые числа состоят из всех целых чисел в диапазоне от -Math.pow(2, 53) - 1) до Math.pow(2, 53) - 1



// Modules

import {fellowship,total} from "./fellowship";
// import {add, multiply} from "./math";
// import * as all from "./math";
// import {add as slozheniye} from "./math";
// import multiply from "./math";

// console.log(fellowship, total)
// console.log(add(5,1)); // 6
// console.log(all.add(5,1)); // 6
// console.log(multiply(5,6)); // 30



// OOP & Classes
// class Animal {
//   constructor(name, height) {
//     this.name = name;
//     this.height = height;
//   }
//
//   hello(){
//     console.log(`Hi ! I'am ${this.name}`)
//   }
// }
// let king = new Animal("Mufasa", 4.5)
// console.log(king)
// king.hello()

// class Lion extends Animal {
//   constructor(name, height, color) {
//     super(name, height);
//     this.color = color
//   }
//
//   hello(){
//     console.log(`Hi ! I'am ${this.name} from Pride Rock`)
//   }
//
// }
// let son = new Lion("Simba", 2, 'golden');
// console.log(son);
// son.hello()



// Static methods
// class Calculator {
//   static multiply(a, b) {
//     return a*b;
//   }
// }
// let a = Calculator.multiply(5, 7);
// console.log(a);


// ProtoTypes
// let parent = {parentProp: 1}
// let child = Object.create(parent)
// console.log(child.parentProp)
// console.log(child)
// parent.newParentProp = 2
// console.log(child.newParentProp)
