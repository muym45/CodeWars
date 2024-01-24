function fiveLine(s) {
    // Menghapus whitespace di kedua sisi parameter s
    s = s.trim();
  
    // Menggunakan string template untuk membangun hasil
    return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(5)}`;
  }