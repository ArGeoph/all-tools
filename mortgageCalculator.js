//App implementing mortgage payments calculator 
let askingPrice = 0, downpayment = 0, term = 0, interestRate = 0;

//Render html fields and add event listeners
const mortgageCalculator = async () => {
    outputHtmlObject.innerHTML = "<div class='container'><h3>Mortgage calculator</h3>" +
    "<form novalidate><p><label><b>Asking price</b><input type='number' class='userInput' id='askingPrice' min='0' value='0' /></label><wbr>" +
    "<label><b>Downpayment</b></label><input type='number' id='downpayment' class='userInput'  min='0' max='100' value='0' /><wbr></p>" +
    "<p><label><b>Amortization term</b><input type='number' id='term' class='userInput'  min='0' max='30' value='0'/></label>" +
    "<label><b>Interest rate     </b><input type='number' id='interestRate' class='userInput'  min='0' max='100' value='0'/></label></p>" +
    "<label><b>Monthly payment</b></label><br><input type='text' id='monthlyPayment' class='userInput disabled' value='$0'/ disabled>" +
    "<p><input type='reset' class='resetButton' value='Clear fields'/></p></form>" +
    "</div>";

    //Add event listeners to field html objects
    document.getElementById("askingPrice").addEventListener("change", await processMortgageInput, false);
    document.getElementById("askingPrice").addEventListener("keyup", await processMortgageInput, false);
    document.getElementById("downpayment").addEventListener("change", await processMortgageInput, false);
    document.getElementById("downpayment").addEventListener("keyup", await processMortgageInput, false);
    document.getElementById("term").addEventListener("change", await processMortgageInput, false);
    document.getElementById("term").addEventListener("keyup", await processMortgageInput, false);
    document.getElementById("interestRate").addEventListener("change", await processMortgageInput, false);
    document.getElementById("interestRate").addEventListener("keyup", await processMortgageInput, false);
};

//AsynsFunction processing user input and calculating mortgage payments
const processMortgageInput = async (event) => {
    let inputValue = event.currentTarget.value;
    let monthlyPayment = 0;

    //Check if entered values are negative, and alert user if it so, zero input values, and return from function
    if (inputValue < 0) {
        window.alert("Input values cannot be negative, blank or contain letters! Check your input ");
        event.currentTarget.value = 0;
        return;
    }

    //Determine which field updated and update correcponding variables
    switch(event.currentTarget.id) {
        case "askingPrice" :
            askingPrice = inputValue;
            break;
        case "downpayment" :
            //check if downpayment less than or equal to 100%, and alert if it's not so
            if (inputValue > 100) {
                window.alert("Downpayment cannot be greater than 100%! Please check your input");
                event.currentTarget.value = 0;
                return;
            }

            downpayment = inputValue;
            break;
        case "term" :
            //check if downpayment less than or equal to 100%, and alert if it's not so
            if (inputValue > 30) {
                window.alert("The maximum amortization period available in your region is 30 years! Please check your input");
                event.currentTarget.value = 0;
                return;
            }

            term = inputValue;
            console.log(term);
            break;
        case "interestRate" :
            //check if downpayment less than or equal to 100%, and alert if it's not so
            if (inputValue > 100) {
                window.alert("Interest rate cannot be greater than 100%! Please check your input");
                event.currentTarget.value = 0;
                return;
            }

            interestRate = inputValue/100;
            break;
    }

    //Calculate mortgage payments, formula from https://www.wikihow.com/Calculate-Mortgage-Payments was used
    if (interestRate != 0 && term != 0) { //to avoid NaN value as monthly payment
        monthlyPayment = ((askingPrice - (downpayment/100)*askingPrice) * interestRate/
            12 * Math.pow((1 + interestRate/12), term * 12)) / (Math.pow((1 + interestRate/12), term * 12) - 1);
    }
    else if(term != 0) {
        monthlyPayment = (askingPrice - (downpayment/100)*askingPrice) / (term * 12);
    }
    else if(term == 0) {
        monthlyPayment = (askingPrice - (downpayment/100)*askingPrice); 
    }
    
    //Output montly payments, and round it to integers
    document.getElementById("monthlyPayment").value = `$${monthlyPayment.toFixed(2)}`;
};