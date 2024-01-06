// given an integer n find the factorial of that integer
// factorial of 4 is 4*3*2*1=24

function factorial(n){
    let result = 1;
    for(let i=2;i<=n;i++){
        result= result*i
    }
    return result;

}
//expected output
console.log(factorial(0))//1
console.log(factorial(1))//1
console.log(factorial(4))//24
console.log(factorial(5))//120

//big -O O(n)- liner time complexity