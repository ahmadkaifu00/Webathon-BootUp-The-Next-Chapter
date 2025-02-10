//the Largest Number in an Array
function findLargestNumber(arr) {
    // Start by assuming the first element is the largest
    let largest = arr[0];  
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

// to take input from the user
let input = prompt("Enter numbers (e.g., 1,2,3,4)");

if (input) {
    // Convert the input string into an array of numbers
    let numbers = input.split(',').map(Number);

    //Call the function to find largest number
    let largest = findLargestNumber(numbers);

    //to display largest number of the array
    alert("The largest number is: " + largest);
}