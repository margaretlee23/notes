<<<<<<< HEAD
// write the function squeeze that will pass the tests...
var squeeze = function(string) {
	var unique='';
	for(var i = 0; i<string.length; i++) {
		if(string.indexOf(string[i] == string.indexOf(string[i])) {
			unique += string[i];
		}
	}
	return unique;
};

console.log(find_unique_characters('squeeze'));
=======
function squeeze(string) {
  //Array that will store single letters
  var splitString = string.split(""); //splits the string into an array of letters
  var previousLetter = ""; //variable declaration in the function's namespace
  var singleLettersCollection = splitString.filter(function(letter){
    if(letter != previousLetter){ //tests if the letter is a duplicate
      previousLetter = letter; //update previous letter value
      return letter; //adds letter to singleLettersCollection
    }
  });
  return singleLettersCollection.join(""); //joins the array back into a string
}
>>>>>>> d70e0a0e30c40d42671a5a1986a1a63d89bbf013
