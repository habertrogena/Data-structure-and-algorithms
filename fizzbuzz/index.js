//print a number from 1 to n
//if number is divisible by 3 print fizz
// if the number is divisible by 5 print buzz
// if number is divisible by 3 and 5 print fizzBuzz
// else print the number

const fizzBuzz = n =>{
    for (let i=1;i<=n;i++){
        if (i % 3 === 0 && i % 5 === 0) {
          console.log("fizzBuzz");
        } else if (i % 3 === 0) {
          console.log("fizz");
        } else if (i % 5 === 0) {
          console.log("buzz");
        } else {
          console.log(i); 
        }
    }
}
fizzBuzz(23)