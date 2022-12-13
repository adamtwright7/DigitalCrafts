// I renamed the player and dealer hand with -DOM so I can track values elsewhere 
const dealerHandDOM = document.getElementById("dealer-hand");
const playerHandDOM = document.getElementById("player-hand");
let playerHand = [];
let dealerHand = [];
let deck = [];
const suits = ["Coins", "Glyphs", "Stars", "Swords"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// This block of code will fill out the deck array with the common deck. 
const makeCard = (rank, suit) => {
  const card = {
    suit: suit,
    rank: rank 
    // I'm letting the rank be the point value in my deck
  };
  deck.push(card);
};

for (let suit of suits) {
  for (let rank of ranks) {
    makeCard(rank, suit);
  }
}

// Adds select high deck cards to make a 52 card deck. Their suit will be their identity, 
// and all will have a rank of 10. 
deck.push({suit: "Beast",rank: 10});
deck.push({suit: "Artifact",rank: 10});
deck.push({suit: "Darklord",rank: 10});
deck.push({suit: "Donjon",rank: 10});
deck.push({suit: "Executioner",rank: 10});
deck.push({suit: "Ghost",rank: 10});
deck.push({suit: "Horseman",rank: 10});
deck.push({suit: "Innocent",rank: 10});
deck.push({suit: "Marionette",rank: 10});
deck.push({suit: "Mists",rank: 10});
deck.push({suit: "Raven",rank: 10});
deck.push({suit: "Seer",rank: 10});

// The Tempter and the Broken One were excluded to make the Tarokka deck 52 cars in total. 

// Let's make a function to shuffle the cards. This is the Fisher-Yates shuffle 
// Copied from StackOverflow: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array 

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

// Now we'll shuffle the cards when the page loads. 
window.addEventListener("DOMContentLoaded", () => {
    deck = shuffle(deck) 
});

// Dealing code. First, we'll make a function that deals 
// the top card in the deck to the player we choose. 

const dealTopCardTo = (playerOrDealer) => {
    if (playerOrDealer == "player"){
        // First, put the numeric card in the numeric array 
        let newCardObj = deck.pop() // This says the last card in the deck array represents the top card. That's fine.
        playerHand.push(newCardObj) 
        // Then put the image on the "table" on the DOM. 
        let newCardImg = document.createElement("img") // Create an img element
        // make that image element the right card 
        newCardImg.src = `./Assets/${newCardObj.rank}of${newCardObj.suit}.png`
        playerHandDOM.append(newCardImg) // put it on the webpage 
    } else { // This is all the same as above, but with the dealer's hand 
        let newCardObj = deck.pop() 
        dealerHand.push(newCardObj) 
        let newCardImg = document.createElement("img") 
        newCardImg.src = `./Assets/${newCardObj.rank}of${newCardObj.suit}.png`
        dealerHandDOM.append(newCardImg) 
    }
}

const dealButton = document.getElementById("deal-button")
dealButton.addEventListener("click", () => {
    dealTopCardTo("player")
    dealTopCardTo("dealer")
    dealTopCardTo("player")
    dealTopCardTo("dealer") // I'll figure out a way to deal this one face down in a bit 
    // Figure out how to disable the deal button, then put it here. 
});



// Playing code 



// BRB