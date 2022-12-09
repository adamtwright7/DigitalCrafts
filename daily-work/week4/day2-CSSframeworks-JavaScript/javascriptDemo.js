const weirdSum = (num1,num2) => {
    let sum = num1 + num2;
    if ((sum >= 50) && (sum <= 80)){
        return 65;
    }
    else {
        return 80;
    } 
}


console.log(weirdSum(2,3))
console.log(weirdSum(26,26))
console.log(weirdSum(80,2))
console.log(weirdSum(30,40))

