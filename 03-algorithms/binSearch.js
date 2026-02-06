/*
Create a function that takes a sorted array and a target value. 
Return the index of the target value in the array. 
If the target value is not in the array, return -1.
*/

export function binSearch(arr, val) {
  if (arr === undefined || arr === null) return -1;
  const n = arr.length;
  if (n === 0) return -1;
  let hi = n - 1;
  let lo = 0;
  let mid;

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);
    if (val < arr[mid]) {
      hi = mid - 1;
    } else if (val > arr[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

function main() {
  const arr = [1, 2, 3, 5, 6];
  let rslt = binSearch(arr, 5);
  console.log(rslt);
}

//main();
