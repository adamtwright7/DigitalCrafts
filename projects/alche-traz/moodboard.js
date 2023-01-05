// Select buttons
const loveButton = document.querySelector("#love")
const deathButton = document.querySelector("#death")
const allByAuthorButton = document.querySelector(".allByAuthor")
const randByAuthorButton = document.querySelector(".randByAuthor")

// Select and make JS variables for the output area. 
const results = document.querySelector("#results")

// A function that actually does all the searching:
const search = async (keyword) => { 

    // Clear the results from last poem.
    results.innerHTML = ""
    
    // Define the URL and fetch the data 
    url = `https://poetrydb.org/title,random/${keyword};1`
    const searchRawData = await fetch(url)
    let searchData = await searchRawData.json()
    
    // If searchData isn't an array, nothing matched the search and we need to tell the user and stop the code. 
    if (!Array.isArray(searchData)) {
        let attributionLine = document.createElement("h2") 
        attributionLine.innerText = "Sorry, nothing matched your search."
        results.append(attributionLine)
        return 
    }

    // Adding attribution
    let attributionLine = document.createElement("h2") 
    attributionLine.innerText = `${searchData.title} by ${searchData.author}`
    results.append(attributionLine)

    // Adding the plaintext,
    for (let line of searchData.lines){
        let lineHolder = document.createElement("p")
        lineHolder.innerText = line
        results.append(lineHolder)
    }
}

// Add event listeners for every button.

loveButton.addEventListener("click",() => search('love'))
deathButton.addEventListener("click",() => search('death'))

allByAuthorButton.addEventListener("click",() => search(allByAuthor))
randByAuthorButton.addEventListener("click",() => search(randByAuthor))