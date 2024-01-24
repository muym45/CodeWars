function roundIt(n) {
    const [integerPart, decimalPart] = n.toString().split('.');
    
    if (integerPart.length < decimalPart.length) {
      // Decimal point is on the left side
      return Math.ceil(n);
    } else if (integerPart.length > decimalPart.length) {
      // Decimal point is on the right side
      return Math.floor(n);
    } else {
      // Decimal point is in the middle
      return Math.round(n);
    }
  }