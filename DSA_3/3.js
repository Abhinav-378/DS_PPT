function nextPermutation(nums) {
    const n = nums.length;
    let i = n - 2;

    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
  
    if (i >= 0) {
      let j = n - 1;
  
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
      
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  
    
    let start = i + 1;
    let end = n - 1;
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  
  const nums = [1, 2, 3];
  nextPermutation(nums);
  console.log(nums); //  [1, 3, 2]
  