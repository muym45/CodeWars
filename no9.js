function padIt(str, n) {
    let i = 0;
    do {
      if (i % 2 === 0) {
        str = "*" + str; // Menambahkan "*" di sisi kiri untuk iterasi genap
      } else {
        str = str + "*"; // Menambahkan "*" di sisi kanan untuk iterasi ganjil
      }
      i++;
    } while (i < n);
  
    return str;
  }