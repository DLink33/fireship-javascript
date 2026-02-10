// The built-in JavaScript Array class has a bunch of feature and methods that can be utilized to create and manipulate arrays in useful ways.  Below are some of the tricks that can be employed

// Initiailizing and filling an array
const arrZeros = Array(100).fill(0);
console.log(arrZeros);

// Using .map() method
// map will run a function for every element within an array.  The return value is used to replace that value within the array. This resultant array is then returned by map.

//Official Documentation: The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const arrCount = arrZeros.map((val, idx) => idx++);
// or
const arrCount2 = [...Array(100).keys()];
/*
Note: The above cod produces an empty arry of 100 indicies.
the key() method produces and iterator that iterates over these indicies from 0..99.
finally, the spread operator (...) "consumes" the iterator which is then placed into a new Array within
the  square brakets '[]'. 
Neat!
*/

console.log(arrCount);
console.log(arrCount2);

//Removing duplicates
const dups = [1, 2, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(dups);

const unique = [...new Set(dups)];
console.log(unique);
/*
This is essentially taking our array, casting it to a set, then casting it back to an array.
The Set constructor is overloaded in such as way as to take in an array which will then remove the dups 
by the set definition.
*/

/*
A quick note on the spread syntax:

"The spread (...) syntax allows an iterable, such as an array or string, to be ***expanded*** in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created."
*/

// Iterating over elems of an array

console.log("traditional for loop");
for (let i = 0; i < unique.length; ++i) {
  console.log(i, unique[i]); // i is an int here
}

console.log("for...in"); // avoid due to how it iterates over properties names with objects
for (const i in unique) {
  console.log(i, unique[i]); // here, i will be coerced to a string instead of an int
}

console.log("for...of");
for (const e of unique) {
  console.log(e); // no idx to use this time
}

console.log("for [k,v] of entries");
for (const [k, v] of unique.entries()) {
  console.log(k, v); // for arrays, k will be an index whose type is an int
}

//bad example of for...in:

const myarr = [10, 20, 30];
myarr.extra = 99; // adding a property

for (const k in myarr) {
  console.log(k); // "0", "1", "2", "extra"
}
// this is because for..in loops iterate over properties which are strings
console.log(Object.getOwnPropertyNames(myarr)); // [ '0', '1', '2', 'length', 'extra' ]

// Here are some more array method (declarative) to learn and can act on an array

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);

a.forEach((val, idx, arr) => {
  arr[idx] = val + idx; // modifies the existing array
});
console.log(a);

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
a = a.filter((val) => (val & 0x1) == 0x0);
console.log(a);

let b = a.find((v, i) => v === 10);
console.log(b);

b = a.findIndex((v, i) => v === 10);
console.log(b);

let rslt = a.reduce((acc, v) => (acc += v), 1000);
console.log(rslt);


const random = a[Math.floor(Math.random() * a.length)];
console.log(random);