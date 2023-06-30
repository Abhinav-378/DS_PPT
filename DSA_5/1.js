function convertTo2DArray(original, m, n) {
  const length = original.length;
  if (length !== m * n) {
    return []; // Return an empty 2D array if it is impossible
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(original[i * n + j]);
    }
    result.push(row);
  }

  return result;
}
const original = [1, 2, 3, 4, 5, 6];
const m = 2;
const n = 3;

const result = convertTo2DArray(original, m, n);
console.log(result);
