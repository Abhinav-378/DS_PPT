function findMissingRanges(nums, lower, upper) {
    const missingRanges = [];
    let prev = lower - 1; 
    const addRange = (start, end) => {
      if (start > end) return;
      if (start === end) {
        missingRanges.push(`${start}`);
      } else {
        missingRanges.push(`${start}->${end}`);
      }
    };
  
  
    for (let i = 0; i <= nums.length; i++) {
      const curr = i < nums.length ? nums[i] : upper + 1; 
      if (curr - prev >= 2) {
      
        addRange(prev + 1, curr - 1);
      }
  
      prev = curr; 
    }
  
    return missingRanges;
  }
  
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  const result = findMissingRanges(nums, lower, upper);
  console.log(result);
  