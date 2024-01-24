function mirrorImage(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      const currentNum = arr[i];
      const reversedNum = Number(String(currentNum).split('').reverse().join(''));
  
      if (arr[i + 1] === reversedNum) {
        return [currentNum, arr[i + 1]];
      }
    }
  
    return [-1, -1];
  }