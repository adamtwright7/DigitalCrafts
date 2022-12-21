// input = an array sorted from smallest to largest 
// output = an array sorted from smallest to largest of the squares of the elements of the input 
// wanna do this without a sort function 

sampleInput1 = [1,2,3,5,6,8,9]
sampleInput2 = [-8,-5,2,3,6]
sampleInput3 = [-10,-6,-3,2,4,5,7]

const sortedSquaredArray = (inputArray) => {
    let inputLength = inputArray.length - 1
    let outputArray = Array(inputArray).fill(0)
    // use a while loop to loop through the input array from both sides, returning the greatest value in the output array 
    let rightIndex = inputLength
    let leftIndex = 0
    let outputIndex = inputLength
    // need to track the index at which we're filling the output so that the while loop knows where to end 
    while(outputIndex>= 0){
        if (Math.abs(inputArray[leftIndex]) > Math.abs(inputArray[rightIndex])){ // if the negative number is greater, square it and put it in the output. Then look at the next negative number. 
            outputArray[outputIndex] = inputArray[leftIndex]**2
            leftIndex ++
            outputIndex -- 
        } else { // if the positive number is greater (or equal), square it and put it in the output. Then look at the next positive number. 
            outputArray[outputIndex] = inputArray[rightIndex]**2
            rightIndex --
            outputIndex -- 
        }
    }
    return outputArray
}

console.log(sortedSquaredArray(sampleInput1))
// expected output = [1,4,9,25,36,64,81]

console.log(sortedSquaredArray(sampleInput2))
// expected output = [4,9,25,36,68]

console.log(sortedSquaredArray(sampleInput3))
// expected output = [4,9,16,25,36,49,100]