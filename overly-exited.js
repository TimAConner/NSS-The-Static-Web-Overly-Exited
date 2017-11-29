// Create an array that contains the words in the sentence
var sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    for(var i = 0; i < theWordArray.length; i++){
        let paragraphDOM = document.createElement("p");
        for(var x = 0; x <= i; x++){
            if((x+1) % 3 === 0){
                let textNode = document.createTextNode(`${theWordArray[x]}${"!".repeat(Math.round(x/3))} `);
                paragraphDOM.appendChild(textNode);
            } else {
                let textNode = document.createTextNode(`${theWordArray[x]} `);
                paragraphDOM.appendChild(textNode);
            }
        }
        document.getElementById("output").appendChild(paragraphDOM);
    }
}

// Invoke the function and pass in the array
addExcitement(sentence);