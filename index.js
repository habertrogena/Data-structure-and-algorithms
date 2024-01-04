// given an array of integers return the sum
// of all elements in the array.

let b = [2,3,4,5,6]
function sumOfArray(){
    let sum=0;
    for(i=0 ; i<b.length ; i++){
        sum += b[i];
    }
    return sum;

}

//console.log(sumOfArray());

// find the sum of first n natural numbers
function sumNaturalNumbers(n){
    let sum = 0;
    for (let i =1; i <= n; i++ ){
        sum += i;
    }
    return sum;
}

//console.log(sumNaturalNumbers());

// most of the time when you see a loop in your code you can say the time complexity is linear.

// given a number n ,find the first n elements of the fibonacci sequence.

function fibonacci(n){
    const fib = [0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib;

}
console.log(fibonacci(2));//[0,1]
console.log(fibonacci(3));//[0,1,1]
console.log(fibonacci(7));//[0,1,1,2,3,5,8]