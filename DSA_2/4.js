function check(flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
      flowerbed[i] = 1;
      count++;

      if (count === n) {
        return true;
      }
    }

    i++;
  }

  return false;
}

const flowerbed = [1,0, 0, 0, 0, 1];
const n = 2;

console.log(check(flowerbed, n)); 