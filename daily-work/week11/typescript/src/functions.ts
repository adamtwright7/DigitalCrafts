const convertToUpper = (inputString: string): string => {
  return inputString.toUpperCase();
};

const upperCased = convertToUpper("Hello!");

console.log(upperCased);

// using a union to type a function
const chooseRandom = (number?: Number): Number | String => {
  if (number) return number;
  const randomNumber = Math.random();
  const stringedNumber = randomNumber.toString();
  return stringedNumber;
};

console.log(chooseRandom());

// using the keyword type. Should only be used for very simple data structures
type Animal = {
  speciesName: string;
};
