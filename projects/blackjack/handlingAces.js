ex1 = [1, 10, 5]; // Sum should be 16 
ex2 = [1, 10, 1]; // Sum should be 12
ex3 = [2, 1, 8]; // Sum should be 21 (one should be counted as 11)
ex4 = [10, 1]; // Sum should be 21 (one should be counted as 11)

// Assuming the sum (not counting 11s) is already < 22
const handleAces = (inputArray,inputSum) => {
    
    let allOneIndeces = [];
    while (firstOneIndex != -1){ // this loop should find the indeces of all "1"s in the input array 
        firstOneIndex = inputArray.findIndex(x => x == 1)
        allOneIndeces.push(firstOneIndex)
    }
    allOneIndeces.pop() // removes the -1 from the loop above 
    
    while (allOneIndeces.length > 0){ 
        if (inputSum + 10 < 22){ // if making the first 1 and 11 helps us, do it and change it to an 11. 
            inputSum += 10; // Adds 10 to the sum because the 1 is now an 11. 
            inputArray[allOneIndeces[0]] = 11; // Makes the first 1 an 11 
            allOneIndeces.shift() // removes the index of the first 1. 
        }
    }
}

// keeping track of wins/losses 
localStorage.setItem("dealerWins",0)
localStorage.setItem("playerWins",0)

// incrementing wins/losses. For example, if the dealer wins: 
localStorage.setItem("dealerWins",localStorage.getItem("dealerWins")+1)

// playing with multiple decks

deck = deck*3 