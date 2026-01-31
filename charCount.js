function getVowelCount(sentence) {
  const vowels = "aeiou";
  let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const vowelCount  = getVowelCount("Apples are tasty fruits");
console.log("Vowel Count: " + vowelCount);

function getConsonantCount (sentence) {
    const vowels = "aeiouy";
 let count = 0;

  for (const char of sentence.toLowerCase()) {
    if (/[a-zA-Z]/.test(char) && char !== " " && !vowels.includes(char)) {
      count++; 
    }
  }
  return count;

}

const consonantCount  = getConsonantCount("Hello, World!");
console.log("Consonant Count: " + consonantCount);



function getPunctuationCount(sentence) {
    const punctuationMarks = ".,!?;:'\"-()[]{}";
    let count = 0;      

    for (const char of sentence) {
        if (punctuationMarks.includes(char)) {
            count++;
        }   
} 
    return count;}


const punctuationCount  = getPunctuationCount("WHAT?!?!?!?!?");
console.log("Punctuation Count: " + punctuationCount);
function getWordCount(sentence) {
  // Supprime les espaces au début/fin et découpe par 1 ou plusieurs espaces
  const words = sentence.trim().split(/\s+/);

  // Cas où la chaîne est vide
  if (sentence.trim() === "") {
    return 0;
  }

  return words.length;
}

const wordCount = getWordCount("I love freeCodeCamp");

console.log("Word Count: " + wordCount);