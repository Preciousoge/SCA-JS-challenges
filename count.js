 
 let count = [] ;
 function countVowel(word) {
 	
 	word = word + " ";

 	newWord = word.split("");
 	 for( var i = 0; i < newWord.length; i ++){
 	 	if (newWord[i] === "a" || "e" || "i" || "o" || "u"){
 	 		newWord.push(i);
 	 	} 
 	 	count = newWord[i];
 	 }
 	// body...
 	return newWord.length ;
 }
 countVowel ("vowel");