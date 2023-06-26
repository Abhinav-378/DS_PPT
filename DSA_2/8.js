function minimumScore(nums, k) {
    nums.sort((a, b) => a - b); 
  
    const n = nums.length;
    const minValue = nums[0] + k; 
    const maxValue = nums[n - 1] - k; 
  
    let minScore = nums[n - 1] - nums[0]; 
    for (let i = 0; i < n - 1; i++) {
      const newMin = Math.min(minValue, nums[i + 1] - k);
      const newMax = Math.max(maxValue, nums[i] + k);
      minScore = Math.min(minScore, newMax - newMin);
    }
  
    return minScore;
  }
  const nums = [1];
const k = 0;

console.log(minimumScore(nums, k)); 
