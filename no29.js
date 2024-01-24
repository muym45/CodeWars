function bigToSmall(arr) {
    // Flatten the 2D array to a 1D array
    const flatArray = arr.flat();
  
    // Sort the array in descending order
    const sortedArray = flatArray.sort((a, b) => b - a);
  
    // Join the elements into a string using ">"
    const result = sortedArray.join('>');
  
    return result;
  }