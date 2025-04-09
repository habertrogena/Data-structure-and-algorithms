//a string is said to be a palindrome if it remains the same when reading from both ends

//the algorithm for doing that is ;
// convert the string to an array
// reverse the string 
// convert the array back to a string
// compare strings 

const isPalindrome = (str) => str.split('').reverse().join('')===str

//console.log(isPalindrome('mom'))

//integer reversal



const reverseInteger = (n) => {
    const reversed = n.toString().split('').reverse().join('');
    return parseInt(reversed) * Math.sign(n)
}

console.log(reverseInteger(1234))