function sortIt(arr) {
    // Count the occurrences of each element
    const countMap = new Map();
    arr.forEach((num) => {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    });
  
    // Sort the array based on conditions
    return arr.slice().sort((a, b) => {
      const countA = countMap.get(a);
      const countB = countMap.get(b);
  
      if (countA !== countB) {
        // Sort by the number of occurrences in ascending order
        return countA - countB;
      } else {
        // If the same number of occurrences, sort by the number value in descending order
        return b - a;
      }
    });
  }