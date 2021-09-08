// Data Structures

// Set
// let a = new Set();
//
// a.add(5);
// a.add(43);
// a.add("woohoo");
// a.add(5);
// a.add({ x: 50, y: 200 });
// a.add({ x: 50, y: 200 });
// console.log(a);
// console.log(a.size);
// console.log(a.has(5));

// let numbers = [5, 7, 8, 13, 13, 17];
// let numSet = new Set(numbers);
//
// console.log(numSet);
//
// for (let element of numSet.values()) {
//   console.log(element);
// }

// let chars = "aweifawjeoanehmwofeuawhfhwuei";
// let chars_arr = chars.split("");
// let chars_set = new Set(chars_arr);
// console.log(chars_set);


// Map
// let a = new Map();
// let key_1 = 'string key';
// a.set(key_1, 'return value for a string key');
//
// let key_2 = { a: 'key '};
// let key_3 = function() {};
// a.set(key_2, 'return value for an object');
// a.set(key_3, 'return value for a function');
// console.log(a)

// let twoDee = [[1, 'one'], [2, 'two'], [3, 'three']];
// let valMap = new Map(twoDee);
// console.log(valMap);
//
// for (let [key, value] of valMap.entries()) {
//   console.log(`${key} => ${value}`);
// }


// let string = "oewiuraowehpamennoawponeienuaperunaewopinu";
// let letters = new Map();
// for (let i=0; i<string.length; i++) {
//   let letter = string[i];
//   if (letters.has(letter) == false) {
//     letters.set(letter, 1);
//   } else {
//     letters.set(letter, letters.get(letter) + 1);
//   }
// }
// console.log(letters);



Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

// for (let i in iterable) {
//   console.log(i);
// }

// for (let i in iterable) {
//   if(iterable.hasOwnProperty(i)) {
//     console.log(i);
//   }
// }


// for (let i of iterable) {
//   console.log(i);
// }



// Generator
import "core-js/stable";
import "regenerator-runtime/runtime";

// function* letterMaker() {
//   yield 'a';
//   yield 'b';
//   yield 'c';
// }
//
// let letterGen = letterMaker();
//
// console.log(letterGen.next())
// console.log(letterGen.next())
// console.log(letterGen.next().value)
// console.log(letterGen.next().value)


// function* countMaker() {
//   let count = 0;
//   while (count < 3) {
//     yield count += 1;
//   }
// }
// let countGen = countMaker();
//
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);
// console.log(countGen.next().value);


// function* evens() {
//   let count = 0;
//   while(true) {
//     count += 2;
//     yield count;
//   }
// }
//
// let sequence = evens();
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);
// console.log(sequence.next().value);




// function* createIterator() {
//   const first = yield 1; // step 1
//   const second = yield first + 2; // step 2
//
//   const third = yield second + 3; // step 3
//   yield third;
// }
//
// const iterator = createIterator();
//
// console.log(iterator.next());
// console.log(iterator.next(4));
// console.log(iterator.next(5));
// console.log(iterator.next(6));
// console.log(iterator.next()); // undefined


// Asynchronous Programming

// let promise = new Promise(function (resolve, reject){
//   setTimeout( () => {
//     // resolve("Resolved")
//     reject("Rejected")
//   }, 3000)
//
// })

// promise.then((data)=> {
//   console.log('fulfilled', data)
// }, (data)=> {
//   console.log('rejected', data)
// })

// promise.then(null, onRejected)

// promise.then((data)=> {
//   console.log('fulfilled', data)
// }).catch( (data)=> {
//   console.log('rejected', data)
// })
// console.log("after promise consumption");
//


// let promise = new Promise((resolve, reject) => {
//
//   // через 2 секунды готов результат: result
//   setTimeout(() => resolve("result"), 2000);
//
//   // через 1 секунду — reject с ошибкой, он будет проигнорирован
//   setTimeout(() => reject(new Error("ignored")), 1000);
//
// });
//
// promise
//   .then(
//     result => alert("Fulfilled: " + result),
//     error => alert("Rejected: " + error)
//   );

// const path = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699';
// fetch(path, {method: 'GET'}).then(response => {
//   console.log(response.json())
//
// })


// async / await

// async function async_one() {
//   return "one";
// }
// // async_one().then(response => console.log(response))
// let result = await async_one()
// console.log(result)


// let a = Math.pow(2, 5);
// console.log(a);

// let a = 2**5;
// console.log(a);

// let b = "wonderful".includes("wonder");
// console.log(b);
//
// let b = [2, 3, 4, 5, 6].includes(7);
// console.log(b);


// let obj = {
//   a: 'one',
//   b: 'two',
//   c: 'three'
// }

// let keys = Object.keys(obj);
// console.log(keys);
//
// // part 2:
// let values = Object.values(obj);
// console.log(values);
//
// // part 3:
// let entries = Object.entries(obj);
// console.log(entries);