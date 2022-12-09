const listOfPokemon = [
    {
      name: "Gengar",
      hp: 220,
      move1: "ShadowBall",
      move2: "Curse",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
      gengarBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/94.png",
    },
    {
      name: "MilTank",
      hp: 300,
      move1: "Rollout",
      move2: "BodySlam",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
      miltankBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/241.png",
    },
    {
      name: "Garchomp",
      hp: 200,
      move1: "HyperBeam",
      move2: "Eathquake",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
      garchompBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/445.png",
    },
    {
      name: "Swampert",
      hp: 190,
      move1: "hydropump",
      move2: "mudshot",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
      swampertBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/260.png",
    },
    {
      name: "Phanpy",
      hp: 120,
      move1: "playrough",
      move2: "tackle",
      picture:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
      phanpyBack:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/231.png",
    },
  ];

for (const pokemon of listOfPokemon) {
    
    // create a <div> with class "card" for each pokemon. 
    const card = document.createElement("div")
    card.className = "card"

    // Create elements for each pokemon thing
    const pokeNameContainer = document.createElement("h1")
    const pokeHPContainer = document.createElement("h2")
    const pokeMoveContainer = document.createElement("h3")
    let pokeFrontPicContainer = document.createElement("img")
    let pokeBackPicContainer = document.createElement("img")

    // put all the pokemon attributes in their correct element. 
    pokeNameContainer.innerText = pokemon.name
    pokeHPContainer.innerText = pokemon.hp
    pokeMoveContainer.innerText = [pokemon.move1, pokemon.move2] 
    pokeFrontPicContainer.src = pokemon.picture

    // Getting the back pictures 
    valuesArray = Object.values(pokemon)
    pokeBackPicContainer.src = valuesArray[valuesArray.length -1]

    // Make the front pic the default pic 
    let pokePicContainer = pokeFrontPicContainer
    pokePicContainer.className = "front" 

    // When clicking on the pokePic, it swaps to the end 
    pokePicContainer.addEventListener("click", () => {
        if (pokePicContainer.className == "front"){
            pokePicContainer.src = pokeBackPicContainer.src
            pokePicContainer.className = "back" 
        } 
        else {
            pokePicContainer.src = pokeFrontPicContainer.src
            pokePicContainer.className = "front" 
        }})

    // Put all those elements on the card, then put the card in the HTML body 
    card.append(pokeNameContainer,pokeHPContainer,pokeMoveContainer,pokePicContainer)
    document.body.append(card)
}
