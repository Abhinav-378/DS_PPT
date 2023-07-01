function findOriginalArray(changed) {
    const n = changed.length;
    if (n % 2 !== 0) {
      return [];
    }
  
    const count = new Map();
    const result = [];
  
    for (const num of changed) {
      count.set(num, (count.get(num) || 0) + 1);
    }
  
    for (const num of changed) {
      if (count.get(num) === 0) {
        continue;
      }
      if (count.get(num * 2) === 0) {
        return [];
      }
  
      result.push(num);
      count.set(num, count.get(num) - 1);
      count.set(num * 2, count.get(num * 2) - 1);
    }
  
    return result;
  }
  const changed = [1, 3, 4, 2, 6, 8];

  console.log(findOriginalArray(changed)); // Output: [1, 3, 4]
    