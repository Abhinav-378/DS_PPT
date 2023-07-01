function multiplySparseMatrices(mat1, mat2) {
    const m = mat1.length;  
    const k = mat1[0].length;
    const n = mat2[0].length;  
  
    const result = new Array(m).fill(0).map(() => new Array(n).fill(0));
  
    
    const transposedMat2 = transposeMatrix(mat2);
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        let sum = 0;
  
        for (let p = 0; p < k; p++) {
          if (mat1[i][p] !== 0 && transposedMat2[j][p] !== 0) {
            sum += mat1[i][p] * transposedMat2[j][p];
          }
        }
  
        result[i][j] = sum;
      }
    }
  
    return result;
  }
 
  function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const result = new Array(cols).fill(0).map(() => new Array(rows).fill(0));
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        result[j][i] = matrix[i][j];
      }
    }
  
    return result;
  }
  const mat1 = [[1, 0, 0], [-1, 0, 3]];
const mat2 = [[7, 0, 0], [0, 0, 0], [0, 0, 1]];

console.log(multiplySparseMatrices(mat1, mat2));
