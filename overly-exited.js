// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    for(var i = 0; i < sentence.length; i++){
        document.getElementById("output").innerHTML+= "<p>";
        for(var x = 0; x <= i; x++){
        document.getElementById("output").innerHTML += sentence[x] + " ";
        }
        document.getElementById("output").innerHTML+= "</p>";
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);