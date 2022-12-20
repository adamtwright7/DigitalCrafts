// Example array 
const students = [
    { name: "jessika", uid: 1 },
    { name: "vinny", uid: 2 },
    { name: "meg", uid: 3 },
    { name: "jaye", uid: 4 },
    { name: "corey", uid: 5 },
    { name: "adam", uid: 6 },
    { name: "rokhaya", uid: 7 },
    { name: "peter", uid: 8 },
    { name: "mauro", uid: 9 },
];

// .map is a .forEach loop which returns the modified array, but doesn't modify the input array. 

const newStudents = students.map(student => {
    let newStudent = student
    newStudent.name = "new person"
    return newStudent
})

// .reduce loops through the array, keeping track of an accumulator and doing something to it with the current value of each loop. 
// Remembers what it did last time. Very useful for objects. 

const numbers = [1,2,3,4,5]
const sum = numbers.reduce((accum,current) => accum + current)
console.log(sum)

// .find loops through an array, finding and returning the first element that makes a function inside of it true. 
// Basically a for loop with an if statement inside. 

const myNum = numbers.find(number => number > 3)
console.log(myNum)

// .filter is the same, but returns an array with everything that makes the condition true.
const myNums = numbers.filter(number => number > 3)
console.log(myNums)

// .push puts an element at the end of an array. 
numbers.push(47)
console.log(numbers)

// .pop removes an element at the end of an array. 
numbers.pop()
console.log(numbers)

// .reverse reverses the array -- not just returning the reverse 
numbers.reverse()
console.log(numbers)

// .sort mutates an array, swaping elements if the return value of the function within is greater than 0. 
// Returns the original array before it was sorted. 
// greatest to smallest would be .sort((a,b) =>b-a)
const newNumbers = [1,2,11,12,6,9,3,1]
newNumbers.sort((num1,num2) => num1 - num2)
console.log(newNumbers)

// .findIndex is .find but it returns the index of the item instead of the item itself. 
