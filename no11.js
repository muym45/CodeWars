function grabDoll(dolls) {
    var bag = [];
  
    for (let i = 0; i < dolls.length; i++) {
      if (dolls[i] === "Hello Kitty" || dolls[i] === "boneka Barbie") {
        bag.push(dolls[i]); // Menambahkan boneka ke dalam tas
      } else {
        continue; // Melewati string lainnya
      }
  
      if (bag.length === 3) {
        break; // Keluar dari loop jika tas sudah penuh
      }
    }
  
    return bag;
  }
  
  // Contoh pemanggilan fungsi dengan parameter yang berbeda
  var result = grabDoll(["Hello Kitty", "boneka Barbie", "Teddy Bear", "Lego", "Hello Kitty"]);
  console.log(result);
  // Output yang diharapkan: ["Hello Kitty", "boneka Barbie", "Hello Kitty"]  