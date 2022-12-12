// Select all the buttons as JavaScript variables, 
// putting them into different useful categories.

const numbersAndOperators = document.querySelectorAll(".number, .operator")
const clear = document.querySelector(".clear")
const equal = document.querySelector(".equal")

// Make a string that will hold each button press
let userInput = []

// Add some event listeners to the numbers and operators. 
// We just want to add these to the user input string, then display them.
for (let element of numbersAndOperators) {
    element.addEventListener("click",(e) => {
        userInput += (e.target.innerText) // Adds button pressed to the user input string
        resultBar.innerText = userInput // Displays the user input string 
    })
}

// We're adding an event listener to the clear button. 
// It will just clear the result bar and the user input string.

clear.addEventListener("click", () => {
    userInput = []
    resultBar.innerText = []
})

// Now the hard part -- adding functionality to the equals button. Still using an event listener. 

// We're gonna initialize a "sum" variable to store results in later. We'll use this for +,-,/, and *. 
let sum = 0 

equal.addEventListener("click", () => {
    // We're going to loop through the userInput string and do stuff with what we find. Tracks index. JavaScript for loops are trash
    let inputIndex = 0
    while (inputIndex < userInput.length){
        if (userInput[inputIndex] == "+"){ // finds a plus
            // Adds the numbers around a +
            sum = userInput[inputIndex-1] + userInput[inputIndex+1]
            // Replaces that part (around +) of userInput with the result
            userInput.splice(inputIndex-1,3,sum) // splice isn't working for some reason 
        } 
        inputIndex ++ 
    }
})

// putting the user input into a results bar that displays on the page
const resultBar = document.querySelector("p")
resultBar.innerText = userInput
