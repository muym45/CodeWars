function colorOf(r, g, b) {
    // Konversi nilai r, g, dan b ke bentuk string hex
    var redHex = r.toString(16).padStart(2, '0');
    var greenHex = g.toString(16).padStart(2, '0');
    var blueHex = b.toString(16).padStart(2, '0');
  
    // Gabungkan nilai hex dan tambahkan karakter '#' di depannya
    var colorCode = "#" + redHex + greenHex + blueHex;
  
    return colorCode;
  }