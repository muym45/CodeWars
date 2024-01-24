function alienLanguage(str) {
    // Memisahkan kalimat menjadi kata-kata
    var words = str.split(" ");
  
    // Menerapkan aturan untuk setiap kata
    var translatedWords = words.map(function(word) {
      // Mengubah huruf terakhir menjadi huruf kecil
      var lastChar = word.slice(-1).toLowerCase();
      
      // Mengubah huruf lainnya menjadi huruf kapital
      var restOfWord = word.slice(0, -1).toUpperCase();
  
      // Menggabungkan hasilnya
      return restOfWord + lastChar;
    });
  
    // Menggabungkan kata-kata yang dihasilkan kembali menjadi kalimat
    return translatedWords.join(" ");
  }