//a function that takes an input of item prices and returns the total bill
function totalBill() {
    let total = 0;

    while(true){
        let price = prompt("Enter the price of each item (or press enter to end)");

        if (price == null || price.trim() == ""){
            break;
        }

        let itemPrices = parseFloat(price);
        total += itemPrices;
    }
    alert("Total Bill: " + total);
}

//call the function
totalBill();