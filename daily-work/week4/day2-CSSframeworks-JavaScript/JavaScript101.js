// Write a madlib function, which is given a name and a subject. It will return(not print) a new string: (name)'s favorite subject in school is (subject).

const madlib = (name, subject) => {
    return `${name}'s favorite subject in school is ${subject}.`
}


// Write a function tipAmount that is given the bill amount and the level of service (one of good, fair and poor) and returns the dollar amount for the tip. Based on:

const tipAmount = (billAmt,lvlService) => {
    if (lvlService == 'good'){
        return billAmt*.2
    }
    else if (lvlService == 'poor'){
        return billAmt*.1
    }
    else{
        return billAmt*.15
    }
}

// Write a function totalAmount that takes the same arguments as tipAmount except it returns the total as the tip amount plus the bill amount. 
// This function may make use of tipAmount as a sub-task.

const totalAmount = (billAmt,lvlService) => {
    if (lvlService == 'good'){
        return billAmt*1.2 // I just added 1 to all the multiplication
    }
    else if (lvlService == 'poor'){
        return billAmt*1.1
    }
    else{
        return billAmt*1.15
    }
}

// Write a function printNumbers which is given a start number and an end number. It will print the numbers from one to the other, one per line:
// Write two versions of the above function. One using a while loop and the other using a for loop.

// While loop version, only considering valid inputs (where 'end'>'start' and both numbers are whole intergers)

const printNumbersWhile = (start,end) => {
    console.log(start)
    let currentNum = start;
    while (currentNum != end){
        currentNum += 1
    }
}

// For loop version, still only considering valid inputs

const printNumbersFor = (start,end) => {
    console.log(start)

    for (let i = start; start < end; i+=1) {
       console.log(i);
    }
}

// Write a function printSquare which is given a size and prints a square of that size using asterisks.

const printSquare = (size) => {
    let row = Array(size).fill('*');
    row = row.join('')
    let i = 0;
    while (i<size){
        console.log(row)
        i += 1
    }
}

// printSquare(5) // testcase

// Write function printBox which is given a width and height and prints a hollow box of those given dimensions.
// Also assumes all inputs are valid and >= 3

const printBox = (width, height) => {
    let row = Array(width)
    let i = 1 
    while (i <= height){
        if (i === 1 || i === height){
            console.log(" " + Array(width-2).fill('-').join('') + "")
        }
        else{
            console.log("|" + Array(width-2).fill(' ').join('') + "|")
        }
        i ++
    }
}

// printBox(6,4) // testcase 

// Write a function printBanner which is given some text and prints a banner with a border surrounding the text. The border has to stretch to the length of the text.

const printBanner = (someText) => {
    let midRow = "- " + someText + " -"
    let bannerRow = Array(midRow.length).fill('-').join('')

    console.log(bannerRow)
    console.log(midRow)
    console.log(bannerRow)
}

// printBanner("hey check this out") // testcase 

// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. \
// To convert text to its leetspeak version, make the following substitutions:
// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7

const leetspeak = (inputStr) => {
    return inputStr.replace(/A|E|G|I|O|S|T/gi, function(x){
        if (x == 'A' || x == 'a'){
            return '4'
        }
        else if (x == 'E' || x == 'e'){
            return '3'
        }
        else if (x == 'G' || x == 'g'){
            return '6'
        }
        else if (x == 'I' || x == 'i'){
            return '1'
        }
        else if (x == 'O' || x == 'o'){
            return '0'
        }
        else if (x == 'S' || x == 's'){
            return '5'
        }
        else if (x == 'T' || x == 't'){
            return '7'
        }
    })
}

// console.log(leetspeak('Call of Duty: Advanced Warfare')) // testcase 

// Write a function, which is given a string, return the result of extending any long vowels to the length of 5.
// I'll take 'long values' to mean 'aa','ee','ii','oo',or 'uu'

const longLongVowel = (inputStr) => {
    return inputStr.replace(/AA|EE|II|OO|UU/gi, function(x){
        if (x == 'Aa' || x == 'aa'){
            return x + 'aaa' // This handles both the lowercase and upercase vowel in one if statement 
        }
        else if (x == 'Ee' || x == 'ee'){
            return x + 'eee'
        }
        else if (x == 'Ii' || x == 'ii'){
            return x + 'iii'
        }
        else if (x == 'Oo' || x == 'oo'){
            return x + 'ooo'
        }
        else if (x == 'Uu' || x == 'uu'){
            return x + 'uuu'
        }
    })
}

// console.log(longLongVowel('Naan')) //testcases
// console.log(longLongVowel('Cheese'))
// console.log(longLongVowel('Aaron'))
// console.log(longLongVowel('Test Case: Adam'))

// Write a function positiveNumbers which is given an array of numbers and returns a new array containing only the positive numbers within the given array.

const positiveNumbers = (numbers) => {
    return numbers.filter(number => number > 0)
}

// console.log(positiveNumbers([1, -8, 9, 4, -3, 6])) // testcase 

// Write a function cipher which is given a string, an offset, and returns the Caesar cipher of the string.

const cipher = (inputString,shift) => {
    // First I'll put the input string in Unicode, then apply the offset, then shift it back to plaintext. 
    // Putting the string in Unicode:
    let currentUnicode = 0;
    let unicodeArray = [];
    let i = 0; 
    while (i < inputString.length) {
        currentUnicode = inputString.codePointAt(i) // This should loop through the input string and convert it to unicode. Now let's apply the shift. 
        if (currentUnicode >= 65 && currentUnicode <= 90) { // For capital letters 
            currentUnicode = ((currentUnicode - 65)+shift)%26 + 65 // handles wrapping
        } 
        else if (currentUnicode >= 97 && currentUnicode <= 122) { // for lowercase letters
            currentUnicode = ((currentUnicode - 97)+shift)%26 + 97
        } // nothing is done to non-alphabetic characters 
        unicodeArray.push(currentUnicode) // stores all the unicode in a new array 
        i++
    }// In unicode, capital letters are 65-90 while lowercase letters are 97-122.
    // Now to go back to plaintext. 
    i = 0
    let outputString = '' 
    while (i<unicodeArray.length) {
        outputString += String.fromCharCode(unicodeArray[i])
        i++
    }
    // outputString.replace(/`/g,'z') // Handles the z issue for lowercase
    // outputString.replace(/@/g,'Z') // Handles the z issue for uppercase
    return outputString
}

// console.log(cipher('test',3)) // testcases
// console.log(cipher("abcdefghijklmnopqrstuvwxyz",4))
// console.log(cipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4))
// console.log(cipher("I am just writing this test to decipher it and to test if xyz letts work",5))
// console.log(cipher('Genius without education is like silver in the mine',13))

// Write a function decipher which is given a string, an offset, and returns the original message.
// This is basically just the same thing as above, but the offset is negative. Because we're going to have to deal with negative modulos, 
// we need to define a new modulo function. 

function modulo(num, mod) {
    return ((num % mod) + mod) % mod;
  }

const decipher = (inputStr,offset) => {
    let currentUnicode = 0;
    let unicodeArray = [];
    let i = 0; 
    while (i < inputStr.length) {
        currentUnicode = inputStr.codePointAt(i) 
        if (currentUnicode >= 65 && currentUnicode <= 90) { 
            currentUnicode = modulo((currentUnicode - 65) - offset,26) + 65 
        } 
        else if (currentUnicode >= 97 && currentUnicode <= 122) { 
            currentUnicode = modulo((currentUnicode - 97) - offset,26) + 97
        } 
        unicodeArray.push(currentUnicode) 
        i++
    }
    
    i = 0
    let outputString = '' 
    while (i<unicodeArray.length) {
        outputString += String.fromCharCode(unicodeArray[i])
        i++
    }
    return outputString
}

//testcases
// console.log(decipher("abcdefghijklmnopqrstuvwxyz",4))
// console.log(decipher("ABCDEFGHIJKLMNOPQRSTUVWXYZ",4))
// console.log(decipher('N fr ozxy bwnynsl ymnx yjxy yt ijhnumjw ny fsi yt yjxy nk cde qjyyx btwp',5)) 
// console.log(decipher('Travhf jvgubhg rqhpngvba vf yvxr fvyire va gur zvar',13))
