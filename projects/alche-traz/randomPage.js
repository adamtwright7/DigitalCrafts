// Select buttons
const randomFullButton = document.querySelector(".randomFullPoem")
const randomSonnetButton = document.querySelector(".randomSonnet")
const randomHaikuButton = document.querySelector(".randomHaiku")

// Select and make JS variables for the output area. 

const attribution = document.querySelector(".attribution")
const poem = document.querySelector(".poem")

// Define functions that can be used in the event listeners. 
// First, we'll do a function that just gets a random poem. This is made simple by PoetryDB's "/random" call.

const getRandPoem = async () => {

    // Clear the results from last poem
    poem.innerHTML = ""

    // Get the data from the API call
    const RandPoemRawData = await fetch("https://poetrydb.org/random")
    let readableRandPoemData = await RandPoemRawData.json()
    readableRandPoemData = readableRandPoemData[0]
    // The 0 index is included because the object we need comes back in an array.

    console.log(readableRandPoemData)

    // Display the data 
    attribution.innerHTML = `${readableRandPoemData.title} by ${readableRandPoemData.author}`
    
    // Need to loop through the lines and make a new line for each one. 
    for (let eachLine in readableRandPoemData.lines){
        let line = document.createElement("p")
        line.innerText = eachLine
        poem.append(line)
    }
}

// Next, we'll do a random sonnet. This is more difficult. 
// It uses the /random call combined with the /linecount call to get 14 random poems, each of which is 14 lines,
// then pulls a line each to make the full poem 

// const getRandSonnet = async () => {
//     const RandSonnetRawData = await fetch("https://poetrydb.org/random,linecount/14;14")
//     const readableRandSonnetData = await RandSonnetRawData.json()
    
//     // Display the data, this time looping through the returned poems. 
//     counter = 1 
//     for (let eachPoem in readableRandSonnetData){
//         attribution.innerHTML = `Line ${counter} is ${eachPoem.title} by ${readableRandPoemData.author}`
//         poem.innerHTML = readableRandPoemData.lines
//         counter ++ 
//     }
// }

// Add event listeners 
randomFullButton.addEventListener("click",getRandPoem)
// randomSonnetButton.addEventListener("click",getRandSonnet)


