const obj1 = {
  first: "a",
  second: "b",
  third: "c",
};

const obj2 = {
  third: "d", // overlapping properties will prioritize later obj's
  fourth: "e",
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // { first: 'a', second: 'b', third: 'd', fourth: 'e' }

const obj = {
  foo: 1,
  bar: 2,
  baz: 3,
};
const newObj = {
  foo: 4,
  ...obj,
};
console.log(newObj); // { foo: 1, bar: 2, baz: 3 }

// Useful or combining arrays too
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];

console.log(arr3); // [1,2,3,4,5,6]
