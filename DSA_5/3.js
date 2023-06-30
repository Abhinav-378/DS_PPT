function sortedSquares(nums) {
    const result = [];
    for (let num of nums) {
      result.push(num * num);
    }
    result.sort((a, b) => a - b);
    return result;
  }
  const nums = [-4, -1, 0, 3, 10];
  const squaredSorted = sortedSquares(nums);
  console.log(squaredSorted);
    