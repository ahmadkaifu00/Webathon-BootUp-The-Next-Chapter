// to calculate the square and cube
function squareAndCube(number) {
    let square = number * number;
    let cube = number * number * number;
    alert(`Number: ${number}, Square: ${square}, Cube: ${cube}`);
}

// Take input from the user
let number = prompt("Enter a number to calculate its square and cube:");
squareAndCube(number);