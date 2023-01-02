// Select buttons
const allByTitleButton = document.querySelector(".allByTitle")
const randByTitleButton = document.querySelector(".randByTitle")
const allByAuthorButton = document.querySelector(".allByAuthor")
const randByAuthorButton = document.querySelector(".randByAuthor")

// Select and make JS variables for the output area. 
const attribution = document.querySelector(".attribution")
const poemText = document.querySelector(".poemText")

const getRandPoem = async () => {

    // Clear the results from last poem.
    poemText.innerHTML = ""
    attribution.innerHTML = ""

    // Get the data from the API call.
    const RandPoemRawData = await fetch("https://poetrydb.org/random")
    let readableRandPoemData = await RandPoemRawData.json()
    readableRandPoemData = readableRandPoemData[0]
    // The 0 index is included because the object we need comes back in an array.

    // Display the data. We only need one h2 here, so we'll just do it in one line instead of a loop. 
    attribution.innerHTML = `<h2> ${readableRandPoemData.title} by ${readableRandPoemData.author} </h2>`

    // Need to loop through the lines and make a new line for each one. 
    for (let eachLine of readableRandPoemData.lines){
        let line = document.createElement("p")
        line.innerText = eachLine
        poemText.append(line)
    }
}