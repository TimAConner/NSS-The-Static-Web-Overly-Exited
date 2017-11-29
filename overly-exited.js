// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    for(var i = 0; i < theWordArray.length; i++){
        document.getElementById("output").innerHTML+= "<p>";
        for(var x = 0; x <= i; x++){
            if((x+1) % 3 === 0){
                document.getElementById("output").innerHTML += theWordArray[x] + "!".repeat(Math.round(x/3)) + " ";
            } else {
            document.getElementById("output").innerHTML += theWordArray[x] + " ";
            }
        }
        document.getElementById("output").innerHTML+= "</p>";
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);