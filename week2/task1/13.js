function isPalindrome(number) {
    //to convert number to string
    const original = number.toString();  
     //to reverse the string
    const reversed = original.split('').reverse().join(''); 
    //to check if the original and reversed strings are the same
    return original === reversed;  
}

const num = parseInt(prompt("Enter a number to check if it's a palindrome:"));
if (isPalindrome(num)) {
    alert(`${num} is a palindrome.`);
} else {
    alert(`${num} is not a palindrome.`);
}