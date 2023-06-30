function arrangeCoins(n) {
    let left = 0;
    let right = n;
    let completeRows = 0;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const coinsNeeded = (mid * (mid + 1)) / 2;
  
      if (coinsNeeded <= n) {
        completeRows = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return completeRows;
  }
  
  
  const n = 8;
  const result = arrangeCoins(n);
  console.log(result); 