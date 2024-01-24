function isolateIt(arr) {
    // Use map to create a new array with modified elements
    const result = arr.map((str) => {
      const middleIndex = Math.floor(str.length / 2);
  
      if (str.length % 2 === 0) {
        // If the string length is even, use the insert method
        return str.slice(0, middleIndex) + '|' + str.slice(middleIndex);
      } else {
        // If the string length is odd, use the replacement method
        return str.slice(0, middleIndex) + '|' + str.slice(middleIndex + 1);
      }
    });
  
    return result;
  }