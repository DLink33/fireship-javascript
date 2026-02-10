/*
Destructuring is a way of performing multiple assignment for arrays and objects.
Essentially you place your variables in the same structural pattern as the elements you want to assign to them. 

The two basic flavors of this are object and array destructuring.
*/

// Object destructuring
const person = {
  name: "John",
  age: 32,
  city: "New York",
  country: "USA",
};

const { name, age } = person;

// Object destructuring with alias

const { name: firstName, age: years } = person;

// Array destructuring
const fruits = ["apple", "banana", "orange"];
const [first, second, third] = fruits;

// more complext example with nested destructuring:
const myObj = {
  a: 1,
  b: 2,
  c: { d: 3 },
};

const {
  a,
  b,
  c: { d },
} = myObj;
console.log(a, b, d); // 1 2 3
