// find the first number in an array that appears more than once 

let testCase1 = [2,1,5,2,3,3,4]
let testCase2 = [3,2,1,5,2,3,4]
let testCase3 = [1,2,3,4,5,6,7,8,9,10]

const firstDup = (inputArray) => {
    if (inputArray.length < 2){// can't be duplicates
        return -1 
    } 
    let object4dubs = {} // gonna store duplicates in this guy.

    index = 0 
    while(index < inputArray.length){
        if (object4dubs[inputArray[index]]){ // if this number is already in the object, that means it's a duplicate! return it 
            return inputArray[index] 
        } else { // if the number doesn't exist in the array, store that it exists 
            object4dubs[inputArray[index]] = 1 
        }
        index ++ 
    }
    return -1
}

console.log(firstDup(testCase1))
console.log(firstDup(testCase2))
console.log(firstDup(testCase3))