function howManySmaller(arr, n) {
    // Misi pertama: Biarkan semua elemen dalam array memiliki dua tempat desimal
    arr = arr.map(function(element) {
      return parseFloat(element.toFixed(2));
    });
  
    // Misi kedua: Hitung jumlah elemen yang lebih kecil dari n
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < n) {
        count++;
      }
    }
  
    return count;
  }