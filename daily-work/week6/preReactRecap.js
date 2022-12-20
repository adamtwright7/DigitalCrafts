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

    // loop through the data, creating a new movie card for each movie 

    for (let movie of readableData){
        
        // create elements and give them classes 
        const movieCard = document.createElement("div")
        movieCard.className = "movieCard"
        const poster = document.createElement("img")
        poster.className = "poster"
        const description = document.createElement("div")
        description.className = "description"
        const title = document.createElement("h2")
        const plot = document.createElement("p")
        const details = document.createElement("p") // Where the year, runtime, and genre will go 
        details.className = "details"

        // modify each movie card with the fetched data 
        title.innerText = movie.Title 
        poster.src = movie.Poster

        // put everything but the poster the description div
        description.append(title,plot,details)

        // put everything in the movie card
        movieCard.append(poster,description)

        // put the movie cards in their container 
        movieCardCont.append(movieCard)

        // Do another call which gives imdb info, from which we can find the plot  
        // Get the URL for another call 
        const imdbID = movie.imdbID 
        const individualMovieURL = `http://www.omdbapi.com/?apikey=9faa7dec&i=${imdbID}`

        // Make the API call with that URL to get more detailed information 
        const rawIndData = await fetch(individualMovieURL)
        const indJson = await rawIndData.json()

        // Add the plot 
        plot.innerText = indJson.Plot
        
        // Add some details 
        let year = movie.Year 
        let genre = indJson.Genre
        let rating = indJson.Rated
        let runtime = indJson.Runtime 
        details.innerText = year + "  |  " + genre + "  |  " + rating + "  |  " + runtime
    }   
}

const searchButton = document.querySelector(".searchButton")
searchButton.addEventListener("click",searchMovie)
