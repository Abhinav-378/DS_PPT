const arr = [0, 4, 0, 6, 1];
let cnt = 0; 


for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== 0) {
    arr[cnt] = arr[i];
    cnt++;
  }
}

for (let i = cnt; i < arr.length; i++) {
  arr[i] = 0;
}

console.log("Modified Array: ");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }