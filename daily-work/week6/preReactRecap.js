const movieCardCont = document.querySelector(".movieCardCont")

// now to create each movie card 

const searchMovie = async () => {
    
    // clear any existing content in the movie card container. 
    movieCardCont.innerHTML = ""

    // Get what's inside the input field 
    const inputField = document.querySelector("input")

    // Call the API with that search 
    let baseURL = "http://www.omdbapi.com/?apikey=9faa7dec&s="
    searchedTitle = inputField.value.replace("/\s/g","+")
    let newURL = baseURL + searchedTitle

    // fetch the data (this is why the total function needs to be async)
    const rawData = await fetch(newURL)
    const json = await rawData.json()
    const readableData = json.Search

    console.log(readableData)
    // loop through the data, creating a new movie card for each movie 

    for (let movie of readableData){
        
        // create elements and give them classes 
        const movieCard = document.createElement("div")
        movieCard.className = "movieCard"
        const moviePoster = document.createElement("img")
        moviePoster.className = "moviePoster"
        const title = document.createElement("h2")
        const description = document.createElement("p")
        const year = document.createElement("p")

        // modify each movie card with the fetched data 
        title.innerText = movie.Title
        year.innerText = movie.Year 
        moviePoster.src = movie.Poster 

        // put everything in the movie card
        movieCard.append(moviePoster,title,year)

        // put the movie cards in their container 
        movieCardCont.append(movieCard)

        // Do another call which gives imdb info, from which we can find the description  
        // Get the URL for another call 
        const imdbID = movie.imdbID 
        const individualMovieURL = `http://www.omdbapi.com/?apikey=9faa7dec&i=${imdbID}`

        // Make the API call with that URL 

        const rawIndData = await fetch(individualMovieURL)
        const indJson = await rawIndData.json()
        console.log(indJson)
        description.innerText = indJson.Plot
        movieCard.append(description)
    }   
}

const searchButton = document.querySelector(".searchButton")
searchButton.addEventListener("click",searchMovie)
