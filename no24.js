function threeInOne(arr) {
    // Create a new array to store the result
    const result = [];
  
    // Iterate through the original array with a step of 3
    for (let i = 0; i < arr.length; i += 3) {
      // Calculate the sum of three elements and push it to the result array
      result.push(arr[i] + arr[i + 1] + arr[i + 2]);
    }
  
    return result;
  }