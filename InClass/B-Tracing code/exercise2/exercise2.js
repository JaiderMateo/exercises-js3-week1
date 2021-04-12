function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  characters.forEach(function(character) {
    if (
      character === "a" ||
      character === "o" ||
      character === "i" ||
      character === "e" ||
      character === "u"
    ) {
      result.push(character);
    } else {
      result.push("_");
    }
  });

  return result.join("");
}

function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    return removeVowels(word);
  });

  return result;
}

/*
  Task 1
  Let's trace this piece of code - what is the value of result with this input
  R// the responce will be _a_ue_ that is the word without consonants, and this is imortat becasuse the funcion
  is called removeVowels but actually remove the consonants and the same for removeVowelsForWords
  */
  
  var result = removeVowels('samuel');
  console.log(result);
  var result2 = removeVowelsForWords(["Irina", "Etza", "Daniel"]);
  console.log(result2);


/*
	Task 2
	Trace what happens if we call the function removeVowelsForWords with this input: ["Irina", "Etza", "Daniel"]
    expected output?:
  R// it returns the and array with the words without vocals
*/

