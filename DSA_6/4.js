function findMaxLength(nums) {
    const n = nums.length;
    let maxLength = 0;
    let count = 0;
    const map = new Map();
  
    map.set(0, -1);
  
    for (let i = 0; i < n; i++) {
      
      if (nums[i] === 0) {
        count -= 1;
      } else {
        count += 1;
      }
  
      if (map.has(count)) {
        
        maxLength = Math.max(maxLength, i - map.get(count));
      } else {
       
        map.set(count, i);
      }
    }
  
    return maxLength;
  }
  const nums = [0, 1];

  console.log(findMaxLength(nums)); // Output: 2
    