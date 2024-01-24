function findSimilarity(str, word) {
    const wordsArray = str.split(' ');
  
    const similarWords = wordsArray.filter((w) => {
      return w.length === word.length &&
             w[0] === word[0] &&
             w[w.length - 1] === word[word.length - 1];
    });
  
    return similarWords.join(' ');
  }