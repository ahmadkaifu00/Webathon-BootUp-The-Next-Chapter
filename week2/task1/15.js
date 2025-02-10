//to checks if a given number is a perfect square
function isPerfectSquare(number) {
    // Negative numbers cannot be perfect squares
    if (number < 0) 
    return false; 

    let i = 0;
    while (i * i < number) {
        i++;
    }

    return i * i === number; // Check if i squared is equal to the number
}

//taking input from the user
const num = parseInt(prompt("Enter a number"));


if (isPerfectSquare(num)) {
    alert(`${num} is a perfect square.`);
} else {
    alert(`${num} is not a perfect square.`);
}
