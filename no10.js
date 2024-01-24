function pickIt(arr) {
    var odd = [],
        even = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        even.push(arr[i]); // Memasukkan bilangan genap ke dalam array even
      } else {
        odd.push(arr[i]);  // Memasukkan bilangan ganjil ke dalam array odd
      }
    }
  
    return [odd, even];
  }