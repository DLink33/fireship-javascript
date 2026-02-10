// functions are first class objects in Js


main();


//These functions will get hoisted to the top of the file at runtime
function main() {
    sayHi();
}

function sayHi(){
    console.log('Hi!');
}

// a functions expression like this will note get hoisted:
const foo = function () {
    console.log('doing something');
}

//has to be called below the definition 
foo();

/*
A higher order function is a function that takes a function as an argument, or returns a function. They are commonly used in functional programming, and are a powerful tool for abstracting away complexity.
*/

// A function that takes a function as an argument
function add(x, y) {
  return x + y;
}
function subtract(x, y) {
  return x - y;
}
function math(x, y, operator) {
  return operator(x, y);
}

console.log(math(5, 2, add));       // 7
console.log(math(5, 2, subtract));  // 3

//Returning a function
function funCreator() {
    return (msg) => "I said, '"+msg+"'";
}

const fn = funCreator(); // setting the return value to a variable

// now we can pass in a string as an argument
console.log(fn("Hello!"));