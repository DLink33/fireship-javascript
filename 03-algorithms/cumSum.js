//imperative style solution
function cumSum(arr) {
  let acc = 0;
  for (const val of arr) {
    acc += val;
  }
  return acc;
}

//declarative style solution
function cumSum2(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

function cumSum3(arr) {
  let acc = 0;
  arr.forEach((v) => {
    acc += v;
  });
  return acc;
}

function main() {
  const arr = [1, 2, 3];
  let rslt;
  rslt = cumSum(arr);
  console.log(rslt);
  rslt = cumSum2(arr);
  console.log(rslt);
  rslt = cumSum3(arr);
  console.log(rslt);
}

main();
