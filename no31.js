function blackAndWhite(arr) {
    // Check if arr is an array
    if (!Array.isArray(arr)) {
      return "It's a fake array";
    }
  
    // Check if arr contains 5 and 13
    if (arr.includes(5) && arr.includes(13)) {
      return "It's a black array";
    }
  
    // If arr contains neither 5 nor 13
    return "It's a white array";
  }
  