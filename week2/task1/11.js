// to assign grades based on marks
function assignGrade(marks) {
    if (marks >= 90) {
        return "Grade A";
    } else if (marks >= 80) {
        return "Grade B";
    } else if (marks >= 70) {
        return "Grade C";
    } else if (marks >= 60) {
        return "Grade D";
    } else {
        return "Fail";
    }
}

function checkGrade() {
    // Take input from user
    const marks = parseInt(prompt("Enter your marks:"));

    //to display the grade using alert
    alert("Your grade is: " + assignGrade(marks));
}

// Call the function to check grade
checkGrade();
