let arr = [-1, 4, -1, 5, 9, 0, -6, 2];
let target = 44;
let len = arr.length;
let sum = 0;

if (len >= 3) {
  let min = Math.abs(arr[0] + arr[1] + arr[2] - target); 

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (i !== j && j !== k && k !== i) {
          if (Math.abs(arr[i] + arr[j] + arr[k] - target) <= min) { 
            sum = arr[i] + arr[j] + arr[k];
            min = Math.abs(arr[i] + arr[j] + arr[k] - target); 
          }
        }
      }
    }
  }
}

console.log(sum);
