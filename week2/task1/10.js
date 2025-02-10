function printPattern(rows) {
    let pattern = "";
    //outer loop for rows
    for (let i = 1; i <= rows; i++) { 
        //inner loop for numbers
        for (let j = 1; j <= i; j++) { 
            pattern += j + " ";
        }
        //to move to next line
        pattern += "\n";
    }
    console.log(pattern);
}

// Call function for 5 rows
printPattern(5);
