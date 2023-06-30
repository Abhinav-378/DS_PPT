function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return []; // If the changed array has an odd length, it cannot be a doubled array
    }
  
    const freqMap = new Map();
    for (let num of changed) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  
    const original = [];
    for (let num of changed) {
      if (freqMap.get(num) === 0) {
        continue;
      }
      const doubleNum = num * 2;
      if (!freqMap.has(doubleNum) || freqMap.get(doubleNum) === 0) {
        return []; // The changed array is not a doubled array
      }
      original.push(num);
      freqMap.set(num, freqMap.get(num) - 1);
      freqMap.set(doubleNum, freqMap.get(doubleNum) - 1);
    }
  
    if (original.length === changed.length / 2) {
      return original;
    } else {
      return []; // Some elements in the changed array were not accounted for
    }
  }
  const changed = [1, 3, 4, 2, 6, 8];
  const original = findOriginalArray(changed);
  console.log(original);
    