/*
Optional chaining ? is a relatively new operator that was introduced in ES2020. It allows you to call object properties safely, without throwing an error. When calling properties without this operator, you many crash your applcation with the error Cannot read property 'foo' of undefined.

If you are unsure if a property or var will not be defined it is a good idea to use optional chaining instead of a try catch or a if else clause since it is cleaner and won't crash your code if you end up running into an issue. 
*/

const obj = undefined;

//obj.hello; // We crash! AH!

//check first:
if (obj) obj.hello;
//or
obj && obj.hello;
//or (best option!)
obj?.hello; // WOW! Look how clean that is!
