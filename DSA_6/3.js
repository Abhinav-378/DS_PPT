function validMountainArray(arr) {
    const n = arr.length;
    let i = 0;
  
    if (n < 3 || arr[0] >= arr[1]) {
      return false;
    }
 
    while (i < n - 1 && arr[i] < arr[i + 1]) {
      i++;
    }
 
    if (i === 0 || i === n - 1) {
      return false;
    }
  
    while (i < n - 1 && arr[i] > arr[i + 1]) {
      i++;
    }
  
    return i === n - 1;
  }
  const arr = [0, 3, 2, 1];

console.log(validMountainArray(arr)); // Output: true
