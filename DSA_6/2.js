function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
  
    let left = 0;
    let right = m * n - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const row = Math.floor(mid / n);
      const col = mid % n;
      const value = matrix[row][col];
  
      if (value === target) {
        return true;
      } else if (value < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return false;
  }
  


let matrix=[[1,3,4,5],[6,7,9,11],[12,14,15,17]]
let target=3
console.log(searchMatrix(matrix, target));