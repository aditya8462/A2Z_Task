function findLongestWordWithMostVowels(sentence) {
  const words = sentence.match(/[a-zA-Z]+/g);

  if (!words) {
    return null; // No valid words in the sentence
  }

  let longestWord = '';
  let maxVowels = 0;

  for (const word of words) {
    const vowelCount = word.match(/[aeiouAEIOU]/g)?.length || 0;
    
    if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowels)) {
      longestWord = word;
      maxVowels = vowelCount;
    }
  }

  return longestWord;
}

// Test cases
console.log(findLongestWordWithMostVowels("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)"));
