// How event objects work. This will console log what is put into the input field.

const button = document.querySelector("button")

const speak = () => {
    const userInput = document.querySelector("input").value 
    console.log(userInput)
}

button.addEventListener("click", speak)

