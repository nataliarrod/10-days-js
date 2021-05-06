function getLetter(s) {
    let letter;
    // Write your code here
    let firstLetter = s[0];
    let vowels = ["a","e","i","o","u"];
    let lettersGroup1 = ["b","c","d","f","g"];
    let lettersGroup2 = ["h","j","k","l","m"];
    
    if (vowels.includes(firstLetter)) {
      return ("A");
    } else if (lettersGroup1.includes(firstLetter)) {
      return ("B");
    } else if (lettersGroup2.includes(firstLetter)) {
      return ("C");
    } else {
      return ("D");
    }
  }
  
  console.log(getLetter("hola"));