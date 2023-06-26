function findLHS(nums) {
    const count = {};
    let maxLength = 0;
  
    for (const num of nums) {
      count[num] = (count[num] || 0) + 1;
    }
  
    
    for (const num in count) {
      const currCount = count[num];
      const nextCount = count[Number(num) + 1];
      
      if (nextCount) {
        maxLength = Math.max(maxLength, currCount + nextCount);
      }
    }
  
    return maxLength;
  }
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];

  console.log(findLHS(nums)); 
    