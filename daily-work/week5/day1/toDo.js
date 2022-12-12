// Make a JS variable for everything we need to manipulate 
let inputField = document.querySelector("input")
let toDoItems = document.querySelector(".toDoItems")
let buttons = document.querySelectorAll("button")

// if (Object.values(localStorage)){
//     for (pastToDo of Object.values(localStorage)){
//         toDoItems.append(pastToDo)
//     }
// }

// Whenever we hit "enter" on the input field 
inputField.addEventListener("keypress", (e) => {
    if (e.key == "Enter"){
        // Add a to-do 
        let newToDo = document.createElement("h2")
        newToDo.innerText = e.target.value 
        toDoItems.append(newToDo)

        // Add a button for this to-do 
        let newButton = document.createElement("button")
        newButton.innerText = "X"
        newButton.addEventListener("click", () => { // Make the buttons delete their element on click
            newButton.parentNode.remove()
            // localStorage.removeItem(newToDo.innerText)
        })
        newToDo.append(newButton)

        // localStorage.setItem(e.target.value,newToDo) // add this item to the local storage too 

        inputField.value = "" // clears the input field 
    }
})

// stringify into local storage, then parse to read out of local storage. 