function singleNumber(nums) {
    nums.sort((a, b) => a - b); 
  
    for (let i = 0; i < nums.length - 1; i += 2) {
      if (nums[i] !== nums[i + 1]) {
        return nums[i];
      }
    }
  
    return nums[nums.length - 1]; 
}
  

  const nums = [2, 2, 1, 4, 4, 6, 6];
  const single = singleNumber(nums);
  console.log(single);