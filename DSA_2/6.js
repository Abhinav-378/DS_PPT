let cnt = 0;

function binarySearch(arr, n, srch) {
  let min = 0;
  let max = n - 1;
  let mid = Math.floor((min + max) / 2);

  while (min <= max) {
    if (srch === arr[mid]) {
      return mid;
    } else if (srch < arr[mid]) {
      max = mid - 1;
    } else if (srch > arr[mid]) {
      min = mid + 1;
    }

    mid = Math.floor((min + max) / 2);
  }

  return -1;
}

const arr = [1, 2, 3, 4, 5];
const size = 5;
const search = 9;

console.log(`Element Found at Index: ${binarySearch(arr, size, search)}`);
