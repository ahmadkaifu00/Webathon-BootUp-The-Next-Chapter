//the multiplication table of a number using a while loop
function printTable(number) {
    let i = 1;
    
    while (i <= 10) {
        console.log(`${number} x ${i} = ${number * i}`);
        i++; 
    }
}

const num = parseInt(prompt("Enter a number to get its multiplication table:"));
printTable(num);