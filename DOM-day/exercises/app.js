// First, I'll store the main container in an element so that I can append to it 
const theDiv = document.querySelector(".mainContainer")

// create a header with your name
const header = document.createElement("h2")
header.innerText = "adamTwright"

// putting in some CSS 
header.style.color = "red"
header.style.display = "flex"
header.style.alignItems = "center"
header.style.justifyContent = "center"

// Adding it to the DOM 
theDiv.append(header)

// create a paragraph with info about you 
// (same workflow as above; create the HTML, modify the HTML, put in CSS, add it to the DOM)
const infoPara = document.createElement("p")
infoPara.innerText = "Ya boy is currently at a Starbucks (in Knoxville) because my internet is out. \n Down horrendously. \n Anyway here's a pic of me with my bow right after re-stringing it."
infoPara.style.fontStyle = "italic" 
theDiv.append(infoPara)

// create an image
const archerHours = document.createElement("img")
archerHours.src = "../../bowBoy.jpg"
archerHours.style.height = "500px"
archerHours.style.width = "auto"
theDiv.append(archerHours)

// Adding dog pictures challenge 

const dogDiv = document.querySelector(".dogDiv")
dogDiv.style.display = "flex"
dogDiv.style.alignItems = "center"
dogDiv.style.justifyContent = "space-evenly"

const dogPicLinks = ["https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
"https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
"https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80"]

for (let dogLink of dogPicLinks) {
    const newDog = document.createElement("img")
    newDog.src = dogLink 
    newDog.style.width = "200px"
    newDog.style.height = "auto"
    dogDiv.append(newDog)
}

// creating a button that can be clicked 

const button = document.createElement("button")
button.innerText = "Click Me!"
button.addEventListener("click", () => console.log("You've clicked the button!"))
dogDiv.append(button)

