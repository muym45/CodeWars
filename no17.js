function firstToLast(str, c) {
    var firstIndex = str.indexOf(c);
    var lastIndex = str.lastIndexOf(c);
  
    if (firstIndex !== -1 && firstIndex !== lastIndex) {
      return lastIndex - firstIndex;
    } else if (firstIndex !== -1 && firstIndex === lastIndex) {
      return 0;
    } else {
      return -1;
    }
  }