function backspaceCompare(s, t) {
    const stackS = [];
    const stackT = [];
  
    // Helper function to process a string and update the stack
    const processString = (str, stack) => {
      for (const char of str) {
        if (char !== '#') {
          stack.push(char);
        } else if (stack.length > 0) {
          stack.pop();
        }
      }
    };
  
    processString(s, stackS);
    processString(t, stackT);
  
    // Compare the contents of the stacks
    if (stackS.length !== stackT.length) {
      return false;
    }
  
    for (let i = 0; i < stackS.length; i++) {
      if (stackS[i] !== stackT[i]) {
        return false;
      }
    }
  
    return true;
  }
  const s = "ab#c";
  const t = "ad#c";
  
  console.log(backspaceCompare(s, t)); // Output: true
    