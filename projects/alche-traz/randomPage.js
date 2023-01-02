// Select buttons
const randomFullButton = document.querySelector(".randomFullPoem")
const randomSonnetButton = document.querySelector(".randomSonnet")
const randomHaikuButton = document.querySelector(".randomHaiku")

// Select and make JS variables for the output area. 
const attribution = document.querySelector(".attribution")
const poemText = document.querySelector(".poemText")

// Define functions that can be used in the event listeners. 
// First, we'll do a function that just gets a random poem. This is made simple by PoetryDB's "/random" call.
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

// Next, we'll do a random sonnet. 
// It uses the /random call combined with the /linecount call to get 3 random poems, each of which is 3 lines,
// then pulls a line each to make the full poem. This assumes that every 3-line poem in the database is a haiku
// and the rhyme scheme is probably going to be very messed up. 

const getRandomHaiku = async () => {
    
    // Clear the results from last poem.
    poemText.innerHTML = ""
    attribution.innerHTML = ""
    
    // Get data from the API.
    const randHaikuRawData = await fetch("https://poetrydb.org/random,linecount/3;3")
    let readableRandHaikuData = await randHaikuRawData.json()

    // Looping through each poem, 
    counter = 0
    for (let eachPoem of readableRandHaikuData){

        // Adding attribution for each poem 
        let attributionLine = document.createElement("h2")
        attributionLine.innerText = `Line ${counter+1} is ${eachPoem.title} by ${eachPoem.author}`
        attribution.append(attributionLine)

        // Adding the plaintext of each poem
        let line = document.createElement("p")
        line.innerText = eachPoem.lines[counter]
        poemText.append(line)

        // and increment the counter. 
        counter ++ 
    }
}

// Next, we'll do a random sonnet. This uses the same methods and assumptions as the haiku function above, 
// but with 14 lines. I literally just switched 3 for 14 and renamed variables. 

const getRandSonnet = async () => {
    
    // Clear the results from last poem.
    poemText.innerHTML = ""
    attribution.innerHTML = ""
    
    // Get data from the API.
    const randSonnetRawData = await fetch("https://poetrydb.org/random,linecount/14;14")
    let readableRandSonnetData = await randSonnetRawData.json()

    // Looping through each poem, 
    counter = 0
    for (let eachPoem of readableRandSonnetData){

        // Adding attribution for each poem 
        let attributionLine = document.createElement("h2")
        attributionLine.innerText = `Line ${counter+1} is ${eachPoem.title} by ${eachPoem.author}`
        attribution.append(attributionLine)

        // Adding the plaintext of each poem
        let line = document.createElement("p")
        line.innerText = eachPoem.lines[counter]
        poemText.append(line)

        // and increment the counter. 
        counter ++ 
    }
}

// Add event listeners 
randomFullButton.addEventListener("click",getRandPoem)
randomSonnetButton.addEventListener("click",getRandSonnet)
randomHaikuButton.addEventListener("click",getRandomHaiku)
