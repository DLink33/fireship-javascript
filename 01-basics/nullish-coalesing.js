/*
Nullish coalescing is a relativly new operator that was introduced in ES2020. It is similar to the logical OR operator ||, but it only returns the right-hand side if the left-hand side is null or undefined.

This is important as there are many values in Js that are interpretted as falsy when we might expect them to be truthy.  These include values like '0' and an empty string ''.  To avoid some of these pitfalls, the nullish coalesing operator '??' will only consider null and undefined as falsey values.

THis is nice for when we want to assign default values to variables upon discovering some other propery doesn't exist. 
*/

let foo = null || "bar";
console.log(foo); // 'bar'

foo = 0 || "bar";
console.log(foo); // 'bar'

foo = null ?? "bar";
console.log(foo); // 'bar'

//this now allows us to set foo to 0 even though it is falsey and we still want to specify a default value
foo = 0 ?? "bar";
console.log(foo); // 0
