//to checks whether a number is prime
function isPrime(n) {
    if (n < 2) 
    return false;

    for (let i = 2; i * i <= n; i++) { 
        if (n % i === 0) 
        return false;
    return true;
    }
}

//to get input from the user
const userInput = prompt("Enter a number to check if it's prime:");

//to convert input to an integer
const number = parseInt(userInput, 10); 

if (isPrime(number)) {
    alert(`${number} is a prime number.`);
} else {
    alert(`${number} is not a prime number.`);
}
