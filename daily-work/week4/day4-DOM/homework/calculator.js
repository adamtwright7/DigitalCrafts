const buttons = document.querySelectorAll("button")

// Make a function that logs each button press as inputs 
userInput = ""

for (let button of buttons) {
    // button.addEventListener("click",()=>{console.log(`You clicked the ${button.innerText} button!`)}) // Just console logging the button press
    button.addEventListener("click",(userInput,button) => {userInput += button.innerText})
}

const resultBar = document.querySelector("p")
resultBar.innerText = userInput
document.p = resultBar