function rndCode() {
    const getRandomUppercase = () => String.fromCharCode(Math.floor(Math.random() * 13) + 65); // ASCII for A to M
    const getRandomDigit = () => Math.floor(Math.random() * 10);
    const getRandomSymbol = () => "~!@#$%^&*"[Math.floor(Math.random() * 8)];
  
    let code;
  
    do {
      const uppercasePart = getRandomUppercase() + getRandomUppercase();
      const numberPart = `${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}${getRandomDigit()}`;
      const symbolPart = getRandomSymbol() + getRandomSymbol();
  
      code = uppercasePart + numberPart + symbolPart;
    } while (usedCodes.includes(code));
  
    usedCodes.push(code);
  
    return code;
  }
  
  // Example usage:
  const usedCodes = [];
  for (let i = 0; i < 100; i++) {
    console.log(rndCode());
  }
  