function findMin(nums) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
  
      if (nums[mid] > nums[right]) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
  
    return nums[left];
  }
  const nums = [3, 4, 5, 1, 2];
  const min = findMin(nums);
  console.log(min);
    