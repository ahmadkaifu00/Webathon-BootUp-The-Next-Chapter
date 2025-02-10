//Convert Temperature 
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

//to take temperature in celsius from user 
let celsius = prompt("Enter temperature in celsius ");

//call the function to convert temperature 
let fahrenheit = celsiusToFahrenheit(celsius);

//to display the temperature in fahrenheit
alert("Temperature in fahrenheit is: " +fahrenheit)
