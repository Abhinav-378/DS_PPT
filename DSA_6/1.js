function findPermutation(s) {
  const n = s.length;
  const perm = new Array(n + 1);
  let smallest = 0;
  let largest = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === 'I') {
      perm[i] = smallest;
      smallest++;
    } else {
      perm[i] = largest;
      largest--;
    }
  }

  perm[n] = smallest;
  return perm;
}
const s = "IDID";
const perm = findPermutation(s);
console.log(perm); 