// gets the fibonacci number that is the nth in the sequence 
// 1, 1, 2, 3, 5, 8, 13, 21... 

function fib(n){
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2)
}

console.log(fib(10))