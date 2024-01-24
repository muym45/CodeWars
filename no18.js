function splitAndMerge(string, separator) {
    // Memisahkan string menjadi kata-kata dengan spasi
    var words = string.split(" ");
  
    // Memisahkan setiap kata menjadi karakter terpisah
    var result = words.map(function(word) {
      return word.split("").join(separator);
    });
  
    // Menggabungkan "kata" yang dihasilkan kembali menjadi kalimat dengan spasi
    return result.join(" ");
  }