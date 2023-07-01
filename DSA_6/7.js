function generateMatrix(n) {
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    let num = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;
  
    while (rowStart <= rowEnd && colStart <= colEnd) {
      
      for (let i = colStart; i <= colEnd; i++) {
        matrix[rowStart][i] = num;
        num++;
      }
      rowStart++;
  
     
      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][colEnd] = num;
        num++;
      }
      colEnd--;
   
      if (rowStart <= rowEnd) {
        for (let i = colEnd; i >= colStart; i--) {
          matrix[rowEnd][i] = num;
          num++;
        }
        rowEnd--;
      }
  
     
      if (colStart <= colEnd) {
        for (let i = rowEnd; i >= rowStart; i--) {
          matrix[i][colStart] = num;
          num++;
        }
        colStart++;
      }
    }
  
    return matrix;
  }
  const n = 3;

console.log(generateMatrix(n));
