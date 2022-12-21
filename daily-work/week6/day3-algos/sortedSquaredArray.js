// input = an array sorted from smallest to largest 
// output = an array sorted from smallest to largest of the squares of the elements of the input 

sampleInput1 = [1,2,3,5,6,8,9]
sampleInput2 = [-8,-5,2,3,6]

const sortedSquaredArray = (inputArray) => {
    let outputArray = []
    for (let number of inputArray){
        outputArray.push(number**2)
    }
    outputArray.sort((a,b) => a-b)
    return outputArray
}

console.log(sortedSquaredArray(sampleInput1))
// expected output = [1,4,9,25,36,64,81]

console.log(sortedSquaredArray(sampleInput2))
// expected output = [4,9,25,36,68]