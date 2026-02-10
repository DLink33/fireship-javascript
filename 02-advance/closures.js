/*
A closure is a function paired with its surrounding lexical environment.
That means it can keep using variables from an outer function even after
that outer function has returned, as long as the inner function is still reachable.
This is useful for encapsulating state ("private" variables).
*/

function outer() {
  let x = 0;           // local to this call of outer()
  return function inner() {
    console.log(++x);  // inner "closes over" x
  };
}

const func = outer();
func(); // 1
func(); // 2
func(); // 3

// outer() has returned, but x remains alive because func (inner) still references
// the lexical environment where x lives. Once func becomes unreachable, x can be GC'd.


// here is another example. Here we are encapsulating state using a closure
function encapsulatedState(x) {
  let state = 10;
  return function() {
    state += x;
    return state;
  }
}

// we can access the state only via the return function
const foo = encapsulatedState(3);
console.log(foo()); // 13