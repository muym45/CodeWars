function cutIt(arr) {
    // Misi pertama: Temukan panjang string terpendek
    var minLength = Infinity;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].length < minLength) {
        minLength = arr[i].length;
      }
    }
  
    // Misi kedua: Cegat semua string hingga panjang string terpendek
    var result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i].slice(0, minLength));
    }
  
    return result;
  }