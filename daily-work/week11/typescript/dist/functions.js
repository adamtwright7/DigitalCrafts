"use strict";
const convertToUpper = (inputString) => {
    return inputString.toUpperCase();
};
const upperCased = convertToUpper("Hello!");
console.log(upperCased);
const chooseRandom = (number) => {
    if (number)
        return number;
    const randomNumber = Math.random();
    const stringedNumber = randomNumber.toString();
    return stringedNumber;
};
console.log(chooseRandom());
