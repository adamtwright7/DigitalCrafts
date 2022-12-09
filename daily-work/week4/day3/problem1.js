const numbers = [1, 2, 3, 6, 9, 7, 3, 6, 9, 5, 0, 6, 34, 0, 0, 2, 0, 4, 0];

const decendingNo0sName = (list = []) => {
    // The second boolean of this if statement could be a loop that checks every element of the array for a number. 
    if (typeof list !== "object" || typeof list[0] !== "number") {
        return "Please enter a valid array of numbers and try again."
    } 
    else {
        let no0s = list.filter(element => element != 0); // filter out 0s
        let descendingNo0s = no0s.sort(function(a, b){return b-a}); // sort descending
        return [...descendingNo0s, "adamTwright"] // Add my name to the end
    }
    
}

console.log(decendingNo0sName(numbers))
console.log(decendingNo0sName('lolol'))
console.log(decendingNo0sName())
